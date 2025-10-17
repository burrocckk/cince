const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-text">OnlyChinese</h3>
            <p className="mt-2 text-text-secondary">Your gateway to mastering Chinese through literature.</p>
          </div>
          <div>
            <h4 className="font-semibold text-text">Navigate</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-text-secondary hover:text-primary">Home</a></li>
              <li><a href="#" className="text-text-secondary hover:text-primary">Browse Books</a></li>
              <li><a href="#" className="text-text-secondary hover:text-primary">Social Feed</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-text">Contribute</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-text-secondary hover:text-primary">Share a Book</a></li>
              <li><a href="#" className="text-text-secondary hover:text-primary">Community Guidelines</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-text">Legal</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-text-secondary hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="text-text-secondary hover:text-primary">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-text-secondary">
          <p>&copy; {new Date().getFullYear()} OnlyChinese. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
