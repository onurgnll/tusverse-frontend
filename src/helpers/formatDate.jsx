
import PrettierDate from "prettierdate"


export function formatDate(stringDate) {
    return PrettierDate.prettyWithDots(new Date(stringDate))
}
