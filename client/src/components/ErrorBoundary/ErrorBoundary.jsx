import { Component } from "react";

const styles = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    padding: "2rem",
    backgroundColor: "var(--background, #ffffff)",
  },
  inner: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: "42rem",
    padding: "2rem",
  },
  icon: {
    width: 48,
    height: 48,
    marginBottom: "1.5rem",
    color: "var(--destructive, #dc2626)",
    flexShrink: 0,
  },
  title: {
    fontSize: "1.25rem",
    marginBottom: "1rem",
    color: "var(--foreground, #2b2b2b)",
  },
  pre: {
    padding: "1rem",
    width: "100%",
    borderRadius: "6px",
    backgroundColor: "var(--muted, #f3f3f7)",
    overflowX: "auto",
    marginBottom: "1.5rem",
  },
  preText: {
    fontSize: "0.875rem",
    color: "var(--muted-foreground, #6b6b84)",
    whiteSpace: "pre-wrap",
    wordBreak: "break-all",
  },
  btn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    backgroundColor: "var(--primary, #1d4ed8)",
    color: "var(--primary-foreground, #eff6ff)",
    border: "none",
    cursor: "pointer",
    fontSize: "0.9rem",
    fontFamily: "inherit",
    transition: "opacity 0.15s ease",
  },
};

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={styles.wrapper}>
          <div style={styles.inner}>
            <svg
              style={styles.icon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
              <path d="M12 9v4" />
              <path d="M12 17h.01" />
            </svg>

            <h2 style={styles.title}>An unexpected error occurred.</h2>

            <div style={styles.pre}>
              <pre style={styles.preText}>
                {this.state.error?.stack}
              </pre>
            </div>

            <button
              style={styles.btn}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              onClick={() => window.location.reload()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                <path d="M21 3v5h-5" />
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                <path d="M8 16H3v5" />
              </svg>
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
