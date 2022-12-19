import { List } from "./_List";
import { IMenuList } from "./_List.annotations";

export function MenuList({ ...rest }: IMenuList) {
	return <List listType="menu" {...rest} />;
}
