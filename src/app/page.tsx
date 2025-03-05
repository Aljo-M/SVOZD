import styles from './styles/Home.module.scss';
import NewsList from '@/components/NewsList';
import ContactInfo from '@/components/ContactInfo';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Sindikat varnosti, obrambe, zaščite in družine</h1>
          <p>Zastopamo interese delavcev Ministrstva za obrambo</p>
        </div>
      </section>
      
      <div className={styles.mainContent}>
        <Tabs defaultValue="news" className={styles.tabsContainer}>
          <TabsList className={styles.tabsList}>
            <TabsTrigger value="news">Obvestila</TabsTrigger>
            <TabsTrigger value="legal">Pravna pomoč</TabsTrigger>
            <TabsTrigger value="members">Zaupniki</TabsTrigger>
          </TabsList>
          
          <TabsContent value="news" className={styles.tabContent}>
            <h2>Obvestila SVOZD</h2>
            <NewsList />
          </TabsContent>
          
          <TabsContent value="legal" className={styles.tabContent}>
            <h2>Pravna pomoč</h2>
            <ul className={styles.legalList}>
              <li>
                <h3>Pravno svetovanje</h3>
                <p>Člani SVOZD lahko za pravno svetovanje zaprosijo v osebnih in tudi drugih zadevah</p>
              </li>
              <li>
                <h3>Zastopanje</h3>
                <p>Pravna pomoč vključuje tudi zastopanje v postopkih pred delodajalcem</p>
              </li>
            </ul>
          </TabsContent>
          
          <TabsContent value="members" className={styles.tabContent}>
            <h2>Zaupniki</h2>
            <ul className={styles.legalList}>
              <li>
                <h3>Seznam zaupnikov</h3>
                <p>Kontaktni podatki sindikalnih zaupnikov po enotah</p>
              </li>
              <li>
                <h3>Postani zaupnik</h3>
                <p>Informacije o volitvah in nalogah sindikalnih zaupnikov</p>
              </li>
            </ul>
          </TabsContent>
        </Tabs>
        
        <aside className={styles.sidebar}>
          <ContactInfo />
        </aside>
      </div>
    </div>
  );
}