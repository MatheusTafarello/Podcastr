import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import styles from './styles.module.scss'; 

export function Header() {
    const CurrrentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBR,
    })
    return(
        <header className={styles.headerContainer}>
          <img src="/logo.svg" alt="Podcastr" />

          <p>O melhor para você consumir, sempre</p>

          <span>{CurrrentDate}</span>
        </header>
    );
}