import express from 'express';
import subdomain from 'express-subdomain';
import { LOG_INFO } from '@/logger';

import discoveryHandlers from '@/services/discovery/routes/discovery';

// Main router for endpointsindex.js
const router = express.Router();

// Router to handle the subdomain restriction
const discovery = express.Router();

// Create subdomains
LOG_INFO('[MIIVERSE] Creating \'discovery\' subdomain');
router.use(subdomain('discove.olv', discovery));
router.use(subdomain('discove-test.olv', discovery));
router.use(subdomain('discove-dev.olv', discovery));

// Setup routes
discovery.use('/v1/endpoint', discoveryHandlers);

export default router;
