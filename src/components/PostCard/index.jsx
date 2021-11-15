import "./styles.css";

// export const PostCard = (props) => {
export const PostCard = ({ title, body, cover }) => ( // Só usar essa estrutura sem return e abrir parênteses quando só houver jsx sendo retornado
    // const post = props;

    // const title = props.title;
    // const body = props.body;
    // const cover = props.cover;

    // const { title, body, cover } = props;
        <div className="post">
            <img src={ cover } alt={ title } />
            <div className="post-content">
                <h2>{ title }</h2>
                <p>{ body }</p>
            </div>
        </div>
);