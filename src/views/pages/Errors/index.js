import darthVader from '../../../assets/images/background/backgroundError.jpg';

let Error404 = {
    is_private: false,
    render: async () => {
        let view = `${error}`
        return view
    },

    after_render: () => {
        console.log('Try another one... :)')
    }
}
let error = `
<a href="/">
    <div class="error-default" style="background-image: url(${darthVader})">
        
            <div class="container error">
                <h1> Erro 404!</h1>
            
                <h2>Caro padawan, este conteúdo não existe.</h2>
                <h3>Clique no Vader e tente novamente! </h3>    
            </div>
    </div>
</a>
`

export default Error404;