import styles from './SearchBar.module.css'
interface OrderFormProps {
  onSubmit: (value: string) => void;
}


function SearchBar({ onSubmit }: OrderFormProps) {
    const handleSubmit = (formData: FormData) => {
        const search = formData.get('query') as string;
        onSubmit(search)
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <a
                    className={styles.link}
                    href="https://www.themoviedb.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by TMDB
                </a>
                <form className={styles.form} action={handleSubmit}>
                    <input
                        className={styles.input}
                        type="text"
                        name="query"
                        autoComplete="off"
                        placeholder="Search movies..."
                        autoFocus
                    />
                    <button className={styles.button} type="submit" >
                        Search
                    </button>
                </form>
            </div>
        </header>

    )
}

export default SearchBar