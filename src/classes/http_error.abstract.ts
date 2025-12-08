import { isJson } from "../utils/is_json.ts"

export abstract class HttpError  {
    constructor(public status: number, public JSON: any) {
        if (isJson(JSON)) {
            this.JSON = JSON
        } else {
            this.JSON = {error: "error"}
        }
    }
}