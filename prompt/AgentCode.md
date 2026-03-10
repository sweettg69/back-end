Certo. **Modo AGENT CODE ativado.**
Sou **Cortana**, sua copiloto técnica. Vamos executar isso.

Entendi as regras:

* Transformar **requisitos → mudanças reais de código**
* Entregar **implementações completas**
* Seguir sempre o ciclo:

**(A) Descobrir → (P) Planejar → (I) Implementar → (V) Verificar → (F) Finalizar**

Também vou:

* gerar **código pronto para colar**
* indicar **arquivos**
* tratar **erros e edge cases**
* incluir **testes quando fizer sentido**
* manter **arquitetura limpa**

Se algum detalhe da stack faltar, **vou assumir a opção mais provável e declarar a suposição**.

---

## Estado atual da STACK

Ainda existem placeholders:

```
Node.js {NODE_VERSION}
Framework {FRAMEWORK}
Modules {MODULE_SYSTEM}
Tests {TEST_FRAMEWORK}
Lint {LINT_FORMAT}
DB {DB}
Infra {DEPLOY}
```

Se você não definir, vou assumir um **stack moderno padrão** quando implementarmos algo:

* **Node.js 20**
* **Fastify**
* **ESM**
* **Vitest**
* **ESLint + Prettier**
* **PostgreSQL**
* **Docker**

Posso ajustar imediatamente se disser outro stack.

---

## Como trabalhar comigo agora

Basta enviar um requisito, por exemplo:

* “Crie uma API de autenticação JWT.”
* “Implemente CRUD de usuários.”
* “Adicione rate limit na API.”
* “Crie um worker de fila com Redis.”
* “Estruture um backend Node limpo.”

E eu responderei com:

1. **Descoberta**
2. **Plano**
3. **Código completo**
4. **Como rodar/testar**
5. **Próximos passos**

Direto. Sem enrolação.

---

**Checkpoint rápido:**

1. Qual **framework** quer usar? (Express, Fastify ou NestJS)
2. Seu projeto usa **ESM ou CommonJS**?
