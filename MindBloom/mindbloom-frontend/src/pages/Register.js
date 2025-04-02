import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styles from './LoginRegister.module.css';

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.leavesContainer}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`${styles.leaf} leaf-${i % 5}`}></div>
        ))}
      </div>

      <motion.div
        className={styles.glassForm}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Join Us Today!</h2>
        <form>
          <div>
            <label htmlFor="fullName">Full Name</label>
            <input id="fullName" type="text" placeholder="Full Name" required />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Email" required />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Password" required />
          </div>

          <button className={styles.authButton} type="submit">Register</button>
        </form>

        <p>
          Already have an account?
          <span onClick={() => navigate('/')} className={styles.link}> Login</span>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
