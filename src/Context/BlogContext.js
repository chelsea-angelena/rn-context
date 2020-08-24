import React, {useContext} from 'react'


export const BlogContext = React.createContext()


export const BlogProvider = ({children}) => {
    const blogPosts = [
        {title: "Post #1"},
        {title: "Post: #2"}
    ]
    return(
    <BlogContext.Provider value={blogPosts}>
        {children}
    </BlogContext.Provider>
    )
}

