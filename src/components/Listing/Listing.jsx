/** @jsx jsx */
import { jsx } from "theme-ui"

import ListItem from "./ListItem"

function Listing({ posts }) {
  return (
    <div>
      {posts.map(post => {
        let categories = false
        if (post.data.categories[0].category) {
          categories = post.data.categories.map(
            c => c.category.document[0].data.name
          )
        }
        return <ListItem key={post.uid} node={post} categories={categories} />
      })}
    </div>
  )
}

export default Listing
