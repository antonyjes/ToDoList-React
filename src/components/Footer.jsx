import '../styles/Footer.css';

function Footer({lenght}) {
    return (
      <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 height-footer">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="https://github.com/antonyjes" className="hover:underline">
            This website has {lenght} items
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    );
  }

  export default Footer;