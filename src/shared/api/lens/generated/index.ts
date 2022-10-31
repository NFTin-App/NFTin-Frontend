/**
 * GQTY: You can safely modify this file and Query Fetcher based on your needs
 */

import type { QueryFetcher } from 'gqty';
import { createClient } from 'gqty';

import type {
    GeneratedSchema,
    SchemaObjectTypes,
    SchemaObjectTypesNames,
} from './schema.generated';
import { generatedSchema, scalarsEnumsHash } from './schema.generated';

const queryFetcher: QueryFetcher = async function (query, variables, fetchOptions) {
    // Modify "/api/graphql" if needed
    const response = await fetch('https://api-mumbai.lens.dev', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables,
        }),
        mode: 'cors',
        ...fetchOptions,
    });

    const json = await response.json();
    return json;
};

export const client = createClient<GeneratedSchema, SchemaObjectTypesNames, SchemaObjectTypes>({
    schema: generatedSchema,
    scalarsEnumsHash,
    queryFetcher,
});

const { query, mutation, mutate, subscription, resolved, refetch, track } = client;

export { mutate, mutation, query, refetch, resolved, subscription, track };

export * from './schema.generated';
