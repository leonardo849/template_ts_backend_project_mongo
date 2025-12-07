import { isJson } from "../utils/is_json.ts"

export abstract class HttpError  {
    constructor(public status: number, JSON: any) {
        this.isJson(JSON)
    }
    private isJson(JSON: any): boolean {
        return isJson(JSON)
    }
}