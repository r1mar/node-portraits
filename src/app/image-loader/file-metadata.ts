import { Observable } from "rxjs/Observable";
import { Subscription } from 'rxjs/Subscription';

export class FileMetadata {
    constructor(public dataUrl?: string,
        public description?: string,
        public id?: number,
        public subscription?: Subscription) {

    }
}
