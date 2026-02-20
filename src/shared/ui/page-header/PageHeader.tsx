import s from './PageHeader.module.css'

type Props = {
    title: string
}

const PageHeader = ({title}: Props) => {
    return (
        <h1 className={s.pageName}>{title}</h1>
    )
}

export default PageHeader