import formstyle from '../formstyle.module.css'

function Personal(){
    return(
        <>
        <div className={formstyle.form_header}>
            <p>Informações pessoais</p>
            <button className={formstyle.button_form}>Mais</button>
        </div>
        <form className={formstyle.form_content}>

            <label htmlFor="nome">Nome</label>
            <input className={formstyle.input} type="text" name="nome" id="nome" />

            <label htmlFor="email">Email</label>
            <input className={formstyle.input} type="text" name="email" id="email" />

            <label htmlFor="github">Github(opcional)</label>
            <input className={formstyle.input} type="text" name="github" id="github" />

            <label htmlFor="portifolio">Portifolio(opcional)</label>
            <input className={formstyle.input} type="text" name="portifolio" id="portifolio" />
        </form>
        </>
    )
}

export default Personal