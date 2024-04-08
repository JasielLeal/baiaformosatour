import { Link, LinkProps, useLocation } from "react-router-dom";


export type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {

    const {pathname} = useLocation()
    
    return (
        <>
            <Link 
            data-current={pathname=== props.to}
            {...props}
            className="font-medium data-[current=true]:text-primary flex items-center gap-2 hover:text-primary transition-all ease-in-out"
            />         
        </>
    )
}