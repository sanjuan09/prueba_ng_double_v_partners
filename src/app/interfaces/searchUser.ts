import { Item } from "./item";


export interface searchUser {
    total_count:        number;
    incomplete_results: boolean;
    items:              Item[];
}