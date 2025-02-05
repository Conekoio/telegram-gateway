## Telegram Gateway API JS library
Wrapper library for using Telegram authorization Gateway API (`https://core.telegram.org/gateway/api`)

## Installation
`npm install telegram-gateway`

## Usage and examples
`import {TgGateway} from "tg-gateway"`

### Create instance
`const gateway = new TgGateway(gateway_api_token)`

To access client methods use "client" property

`gateway.client`

#### checkSendAbility

```
await gateway.client.checkSendAbility({
    phone_number: phone,
})
```

#### sendVerificationMessage

```
await gateway.client.sendVerificationMessage({
    phone_number: phone,
    code_length: 4
})
```

#### checkVerificationStatus

```
await gateway.client.checkVerificationStatus({
    request_id: verificationMessageResponse.request_id
})
```

#### revokeVerificationMessage

```
await gateway.client.revokeVerificationMessage({
    request_id: verificationMessageResponse.request_id
})
```

### Integrity check
Library allows to check the integrity of received reports

More info at `https://core.telegram.org/gateway/api#report-delivery`

To do so, use it like this

`gateway.integrity.check(timestamp, signature, body)`

`true` will be returned if integrity check is ok

# Testing

Create `.tests.json` in the root directory, it's content should be:

```
{
  "token": "your_token",
  "phone": "your_phone"
}
```

then run

`npm run test`
