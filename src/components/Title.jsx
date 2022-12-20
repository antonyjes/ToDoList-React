import '../styles/Title.css';

const Title = ({title}) => {
    return(
        <div className="h-16 flex flex-row justify-center items-center title-bg">
            <h1 className="text-center uppercase text-2xl font-bold text-white">{title}</h1>
        </div>
    )
}

export default Title;