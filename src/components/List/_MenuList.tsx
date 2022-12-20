import { List } from "./_List";
import type { IMenuList } from "./_List.annotations";

export function MenuList({ ...rest }: IMenuList) {
	return <List listType="menu" {...rest} />;
}
