import {instance} from "./api";

type getCaptchaUrlResponseType = {
    url: string,
}

export const SecurityAPI ={
    getCaptchaUrl() {
        return instance.get<getCaptchaUrlResponseType>(`security/get-captcha-url`).then(res => res.data)
    }
}