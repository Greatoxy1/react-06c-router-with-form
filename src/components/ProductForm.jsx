export function ProductForm({onAddProduct}){
    function handleSubmit(event) {
        event.PreventDefault();
        const formData = new formData(event.target);
        const fields = Object.formEntries(formData);
        onAddProduct (fields);
         event.target.reset();
       

    }
    return(
        <form onsubmit ={(e) => handleSubmit (e)}>
            <label>
                name :
                <input type = "text" name="name" required/>
            </label>
            <label>
                Description :
                <inpute type ="text" name ="Description" required/>
                </label> 
                <label>
                    Price :
                    <inpute type ="number" name="price"required/> 
                </label>
                <button type ="submit">Add Product</button>
            </form>
    )
}
    