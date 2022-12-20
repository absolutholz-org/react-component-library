import { List } from "./_List";
import type { IUList } from "./_List.annotations";

export function UList({ ...rest }: IUList) {
	return <List listType="ul" {...rest} />;
}
