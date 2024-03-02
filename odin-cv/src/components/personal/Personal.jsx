import formstyle from '../formstyle.module.css'
import { useCallback, useState } from 'react'

function Personal() {
    const [isExpanded, setIsExpanded] = useState(false)

    const toggleIsExpanded = useCallback(() => {
        setIsExpanded((isExpanded) => !isExpanded)
    }, [])

    return (
        <>

            <div style={{ height: isExpanded ? '340px' : '40px' }} className={formstyle.form_content}>

                <div className={formstyle.form_header}>
                    <p>Informações pessoais</p>
                    <button onClick={toggleIsExpanded} className={formstyle.button_form}>
                        {isExpanded ? "<" : "v"}
                    </button>
                </div>

                <label htmlFor="nome">Nome</label>
                <input className={formstyle.input} type="text" name="nome" id="nome" />

                <label htmlFor="email">Email</label>
                <input className={formstyle.input} type="text" name="email" id="email" />

                <label htmlFor="github">Github(opcional)</label>
                <input className={formstyle.input} type="text" name="github" id="github" />

                <label htmlFor="portifolio">Portifolio(opcional)</label>
                <input className={formstyle.input} type="text" name="portifolio" id="portifolio" />
            </div>
        </>
    )
}

export default Personal