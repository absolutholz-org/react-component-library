import { List } from "./_List";
import type { IOList } from "./_List.annotations";

export function OList({ ...rest }: IOList) {
	return <List listType="ol" {...rest} />;
}
