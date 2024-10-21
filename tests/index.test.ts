import { readFileSync } from "fs";
import {resolve} from 'path'
import {TgGateway} from "../src";

describe("flow working",  () => {
	const dirname = resolve()
	const { token, phone } = JSON.parse(
		readFileSync(dirname + '/.tests.json', "utf-8"),
	);
	let gateway: TgGateway;

	beforeEach(() => {
		gateway = new TgGateway(token);
	});

	it("checks send ability correctly", async () => {
		const response = await gateway.client.checkSendAbility({
			phone_number: phone,
		});
		expect(response.request_id).toBeDefined()
	});

	it("checks send verification message correctly", async () => {
		await delay()
		const response1 = await gateway.client.sendVerificationMessage({
			phone_number: phone,
			code_length: 4
		});
		expect(response1.request_id).toBeDefined()

		await delay()
		const response2 = await gateway.client.sendVerificationMessage({
			phone_number: phone,
			code: 1234
		});
		expect(response2.request_id).toBeDefined()

		await delay()

		try {
			const response3 = await gateway.client.sendVerificationMessage({
				phone_number: phone,
				code: ''
			});
			expect(1).toBe(2) // should not be called
		} catch (e) {
			expect.any(true)
		}

	}, 20000);

	it("checks verification status", async () => {
		await delay()
		const response = await gateway.client.sendVerificationMessage({
			phone_number: phone,
			code_length: 4
		});
		expect(response.request_id).toBeDefined()

		const response2 = await gateway.client.checkVerificationStatus({
			request_id: response.request_id
		});

		expect(response2.delivery_status).toBeDefined()
	}, 10000);

	it("revokes verification", async () => {
		await delay()
		const response = await gateway.client.sendVerificationMessage({
			phone_number: phone,
			code_length: 4
		});
		expect(response.request_id).toBeDefined()

		const response2 = await gateway.client.revokeVerificationMessage({
			request_id: response.request_id
		});

		expect(response2).toBe(true)
	}, 10000);
});

const delay = () => new Promise(r => setTimeout(r, 5000))
