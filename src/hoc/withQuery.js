import { useQuery } from "../hooks/useQuery";


export function withQuery(Component) {
    function ComponentWithQueryProp(props) {
        let query = useQuery()
        return (
            <Component
                {...props}
                query={query}
            />
        );
    }

    return ComponentWithQueryProp;
}