import pg from 'pg';
const { Pool } = pg;

// Pool singleton reutilizável. Configurações via variáveis de ambiente:
// DATABASE_URL ou as variáveis PGHOST, PGUSER, PGPASSWORD, PGDATABASE, PGPORT
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT ? parseInt(process.env.PGPORT, 10) : undefined,
    // Habilite SSL se necessário definindo PGSSLMODE=require
    ssl: process.env.PGSSLMODE === 'require' ? { rejectUnauthorized: false } : undefined,
});

/**
 * Executa um comando SQL no banco Postgres.
 * @param {string} sql - Comando SQL ou query parametrizada ($1, $2 ...).
 * @param {Array} params - Array de parâmetros para a query.
 * @returns {Promise<object>} - Retorna o objeto de resposta do pg (rows, rowCount, etc.).
 */
export async function executeSQL(sql, params = []) {
    const client = await pool.connect();
    try {
        const res = await client.query(sql, params);
        return res; // usuário pode acessar res.rows, res.rowCount, etc.
    } catch (err) {
        // Propaga o erro para tratamento na camada superior
        throw err;
    } finally {
        client.release();
    }
}

/**
 * Fecha o pool (útil em scripts que terminam ou em testes).
 */
export async function closePool() {
    await pool.end();
}

export { pool };