import '../Notfound/NotFound.scss';

function ErrorPage() {
  return (
    <main className="page not-found">
      <div className="center-block">
        <h1>Oops!</h1>
        <p>
          Something went wrong!, please click refresh, if problem persist,
          kindly contact support. Thanks.
        </p>
        <div className="action-buttons">
          <button
            type="button"
            className="butn butn--green wide-butn"
            onClick={() => window.location.reload()}
          >
            Refresh
          </button>
          
        </div>
      </div>
    </main>
  );
}

export default ErrorPage;
