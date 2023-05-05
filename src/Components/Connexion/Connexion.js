import './Connexion.css';
import Web3 from 'web3';

function Connexion() {

    const componentDidMount = () => {
        // Vérifie si MetaMask est installé
        if (window.ethereum) {
          // Initialise le fournisseur Web3 avec MetaMask
          const web3 = new Web3(window.ethereum);
          try {
            // Demande à l'utilisateur l'autorisation d'accéder à son compte MetaMask
            window.ethereum.enable();
            // Maintenant, vous pouvez utiliser Web3.js avec MetaMask
            // Exemple : récupère l'adresse du compte connecté
            const accounts = web3.eth.getAccounts();
            console.log('Adresse du compte connecté : ', accounts[0]);
          } catch (error) {
            console.error('Erreur lors de l\'autorisation d\'accès au compte MetaMask:', error);
          }
        } else {
          console.error('Veuillez installer MetaMask pour utiliser cette fonctionnalité.');
        }
    }

    return (
        <>
        <button onClick={() => componentDidMount()}>button</button>
        </>
    );

}

export default Connexion;