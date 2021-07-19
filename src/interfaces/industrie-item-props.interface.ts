import { OptionalInformation } from "./optional-information.interface";

export interface IndustrieItemProps{
    industrie: OptionalInformation,
    onDelete: (industrie: OptionalInformation) => void,
}