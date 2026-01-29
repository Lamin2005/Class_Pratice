import { User } from "./User";
import { Editor } from "./Editor";
export interface Admin extends User, Editor {
    deleteUser(state?: boolean): boolean;
}
//# sourceMappingURL=Admin.d.ts.map