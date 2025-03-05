import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import styles from './ContactInfo.module.scss';

export default function ContactInfo() {
  return (
    <div className={styles.contactInfo}>
      <h2>Kontaktni podatki</h2>
      
      <div className={styles.info}>
        <div className={styles.infoItem}>
          <MapPin size={20} />
          <div>
            <strong>Naslov</strong>
            <p>Vojkova cesta 55, 1000 Ljubljana</p>
          </div>
        </div>
        
        <div className={styles.infoItem}>
          <Mail size={20} />
          <div>
            <strong>E-pošta</strong>
            <p>svozd.predsednik@gmail.com</p>
          </div>
        </div>
        
        <div className={styles.infoItem}>
          <Phone size={20} />
          <div>
            <strong>Telefon</strong>
            <p>040 821 596</p>
          </div>
        </div>
        
        <div className={styles.infoItem}>
          <Clock size={20} />
          <div>
            <strong>Uradne ure</strong>
            <p>po predhodnem dogovoru</p>
          </div>
        </div>
      </div>
    </div>
  );
}