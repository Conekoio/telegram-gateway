## Telegram Gateway API JS library
Wrapper library for using Telegram authorization Gateway API (`https://core.telegram.org/gateway/api`)

## Installation
`npm install tg-gateway`

## Usage and examples
`import {TgGateway} from "tg-gateway"`

### Create instance
`const gateway = new TgGateway(gateway_api_token)`

To access client methods use "client" property

`gateway.client`

#### checkSendAbility

```
gateway.client.checkSendAbility({
    phone_number: phone,
})
```

#### sendVerificationMessage

```
gateway.client.sendVerificationMessage({
    phone_number: phone,
    code_length: 4
})
```

#### checkVerificationStatus

```
gateway.client.checkVerificationStatus({
    request_id: verificationMessageResponse.request_id
})
```

#### revokeVerificationMessage

```
gateway.client.revokeVerificationMessage({
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

`npm run test`
