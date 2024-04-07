import Link from "next/link"

const PageNotFound = () =>{
    return <div>
        <h1>PageNotFound</h1>
        <p>This page can not be found</p>
        <Link href="/">Return home</Link>
    </div>
}

export default PageNotFound