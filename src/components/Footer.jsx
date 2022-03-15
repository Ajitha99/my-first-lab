function Footer( { copyRight, installation, APIReference, Hooks, Blog, GitHub } ) {
    return(
        <footer>
             <p>{ copyRight}</p>
             <ul>
                 <li><a href= { installation} >Installation</a></li>
                 <li><a href = { APIReference}>API reference</a></li>
                 <li><a href = { Hooks}>Hooks</a></li>
                 <li><a href = { Blog}> Blog </a></li>
                 <li><a href = { GitHub}> Github</a></li>
             </ul>
        </footer>
    )
}
export default Footer;