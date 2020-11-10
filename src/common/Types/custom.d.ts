type LoadPromise = Promise<unknown>;

interface Window {
  loadPromise: LoadPromise;
}
