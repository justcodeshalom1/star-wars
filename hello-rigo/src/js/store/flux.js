const getState = ({ getStore, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			favorite: []
		},
		actions: {
			markAsFavorite: (elementId, name, gender) => {
				const store = getStore();
				setStore({ favorite: store.favorite.concat({ Index: elementId, name: name, Gender: gender }) });
				//console.log("Index:", elementId);
			},
			removeFavorites: (elementId, index) => {
				const store = getStore();
				setStore({ favorite: store.favorite.filter((item, i) => i !== index) });
			}
			//get the store
			/*const store = getStore();
                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });
                //reset the global store
                setStore({ demo: demo });*/
			// }
		}
	};
};

export default getState;
