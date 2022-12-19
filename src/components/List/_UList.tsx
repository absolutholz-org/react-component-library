import { List } from "./_List";
import { IUList } from "./_List.annotations";

export function UList({ ...rest }: IUList) {
	return <List listType="ul" {...rest} />;
}
