import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import fetch from 'node-fetch';
global.fetch = fetch;

afterEach(() => {
    cleanup();
});
