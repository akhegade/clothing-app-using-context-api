import React, {useContext} from "react";
// import {connect} from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";

// import {selectCollection} from "../../redux/shop/shop.selectors";
import CollectionsContext from "../../contexts/collections/collections.context";
import "./collection.styles.scss";

// Method 2 :Using useContext hook
const CollectionPage = ({match}) => {
  const collections = useContext(CollectionsContext);
  const collection = collections[match.params.collectionId];
  const {title, items} = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// Method 1 :use context api

// const CollectionPage = ({match}) => {
//   return (
//     <CollectionsContext.Consumer>
//       {collections => {
//         const collection = collections[match.params.collectionId];
//         const {title, items} = collection;
//         return (
//           <div className="collection-page">
//             <h2 className="title">{title}</h2>
//             <div className="items">
//               {items.map(item => (
//                 <CollectionItem key={item.id} item={item} />
//               ))}
//             </div>
//           </div>
//         );
//       }}
//     </CollectionsContext.Consumer>
//   );
// };

// const mapStateToProps = (state, ownProps) => ({
//   collection: selectCollection(ownProps.match.params.collectionId)(state)
// });

export default CollectionPage;

// export default connect(mapStateToProps)(CollectionPage);
