import { settings } from "../../../settings";


export const getErrorMessage = (e) => {
    const ServerIssueMessage = `Ошибка на стороне сервера, по вопросам обратитесь по адресу ${settings.contactEmail}`
    const ServerIssueStatusArray = [404,]
    let errorMsg = ServerIssueStatusArray.includes(e.response.status) ? ServerIssueMessage : e.response.data;
    if (typeof errorMsg === 'string')
        errorMsg = { msg: errorMsg.slice(0, 120) }
    return errorMsg
}