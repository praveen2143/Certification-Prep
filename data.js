/* =============================================================
   data.js — CertPath Learning System
   
   HOW TO ADD / EDIT CONTENT:
   - Edit the CERT_DATA object below directly.
   - Add topics inside a cert's "topics" array.
   - Add cards inside a topic's "cards" array.
   - Card IDs must be globally unique (e.g. "sc-001", "j21-001").
   - status: "active" shows topics; "planned" shows a placeholder.
   ============================================================= */
const CERT_DATA = {
  "certifications": [
    {
      "id": "spring-professional",
      "title": "Spring Certified Professional",
      "vendor": "VMware",
      "exam_code": "2V0-72.22",
      "color": "#6DB33F",
      "icon": "☘️",
      "status": "active",
      "target_date": "2026-09-01",
      "pass_score": 76,
      "total_questions": 60,
      "time_minutes": 130,
      "topics": [
        {
          "id": "spring-core",
          "title": "Spring Core",
          "weight": 20,
          "cards": [
            {
              "id": "sc-001",
              "question": "What is Inversion of Control (IoC)?",
              "answer": "A design principle where the control of object creation is transferred to a container/framework rather than the class itself. Spring's IoC container manages bean creation, dependency wiring, and lifecycle.",
              "tags": ["ioc", "container", "beans"],
              "difficulty": "beginner"
            },
            {
              "id": "sc-002",
              "question": "What is Dependency Injection (DI) and what are its three types in Spring?",
              "answer": "DI is when the container injects dependencies into a class rather than the class creating them. Three types: (1) Constructor injection — via constructor args (preferred), (2) Setter injection — via setter methods, (3) Field injection — via @Autowired on fields (not recommended for testing).",
              "tags": ["di", "injection", "constructor"],
              "difficulty": "beginner"
            },
            {
              "id": "sc-003",
              "question": "What annotation marks a class as a Spring configuration class?",
              "answer": "@Configuration marks a class as a source of bean definitions. Methods inside it annotated with @Bean are registered as Spring-managed beans. It is a specialization of @Component and is picked up by component scanning.",
              "tags": ["configuration", "beans", "annotation"],
              "difficulty": "beginner"
            },
            {
              "id": "sc-004",
              "question": "What is the difference between @Component, @Service, @Repository, and @Controller?",
              "answer": "All are specializations of @Component for auto-detection via classpath scanning. @Service marks business logic layer, @Repository marks DAO/persistence layer (adds PersistenceExceptionTranslation), @Controller marks Spring MVC web controllers. Functionally similar but carry semantic meaning and layer-specific features.",
              "tags": ["stereotype", "component", "annotation"],
              "difficulty": "beginner"
            },
            {
              "id": "sc-005",
              "question": "What are the default and web-aware bean scopes in Spring?",
              "answer": "Default scopes: Singleton (one instance per container — default), Prototype (new instance each request). Web-aware scopes: Request (one per HTTP request), Session (one per HTTP session), Application (one per ServletContext), WebSocket (one per WebSocket session).",
              "tags": ["scope", "singleton", "prototype"],
              "difficulty": "beginner"
            },
            {
              "id": "sc-006",
              "question": "What is the difference between Singleton scope in Spring and the Singleton design pattern?",
              "answer": "Spring Singleton means one instance per ApplicationContext (container), not per JVM/ClassLoader. You can have multiple containers each with their own singleton instance. The GoF Singleton pattern enforces one instance per ClassLoader.",
              "tags": ["singleton", "scope", "container"],
              "difficulty": "intermediate"
            },
            {
              "id": "sc-007",
              "question": "How does @Autowired resolve dependencies and what happens with multiple matching beans?",
              "answer": "Spring resolves @Autowired by type first. If multiple beans of the same type exist, Spring looks for a bean whose name matches the field/parameter name. Use @Qualifier('beanName') to explicitly select one, or @Primary to mark the default candidate.",
              "tags": ["autowired", "qualifier", "primary"],
              "difficulty": "intermediate"
            },
            {
              "id": "sc-008",
              "question": "What is @Primary and when would you use it?",
              "answer": "@Primary marks a bean as the preferred candidate when multiple beans of the same type exist and no @Qualifier is specified. It is the default fallback without requiring call-site changes. Override it per injection point with @Qualifier.",
              "tags": ["primary", "autowired", "qualifier"],
              "difficulty": "intermediate"
            },
            {
              "id": "sc-009",
              "question": "What is @Qualifier and how does it differ from @Primary?",
              "answer": "@Qualifier is used at the injection point to specify exactly which bean to inject by name. @Primary is set on the bean definition as the global default. @Qualifier takes precedence over @Primary and gives per-injection-point control.",
              "tags": ["qualifier", "primary", "disambiguation"],
              "difficulty": "intermediate"
            },
            {
              "id": "sc-010",
              "question": "What is @Value used for and what sources can it read from?",
              "answer": "@Value injects values from: (1) literal strings, (2) property files via ${property.key} placeholder, (3) Spring Expression Language via #{expression}. Applied to fields, constructor params, or setter params. Requires a PropertySourcesPlaceholderConfigurer bean (auto-configured by Spring Boot).",
              "tags": ["value", "properties", "spel"],
              "difficulty": "beginner"
            },
            {
              "id": "sc-011",
              "question": "What is Spring Expression Language (SpEL) and give three use cases?",
              "answer": "SpEL is a runtime expression language for querying/manipulating objects. Use cases: (1) @Value('#{systemProperties[\"user.name\"]}') — inject system property, (2) @ConditionalOnExpression for conditional beans, (3) security expressions like hasRole('ADMIN') in @PreAuthorize. Uses #{ } syntax.",
              "tags": ["spel", "expression", "value"],
              "difficulty": "intermediate"
            },
            {
              "id": "sc-012",
              "question": "What is the Spring bean lifecycle in order?",
              "answer": "1. Instantiate bean. 2. Inject dependencies. 3. Call *Aware interfaces (BeanNameAware, BeanFactoryAware, ApplicationContextAware). 4. BeanPostProcessor.postProcessBeforeInitialization(). 5. @PostConstruct / afterPropertiesSet() / custom init-method. 6. BeanPostProcessor.postProcessAfterInitialization(). 7. Bean in use. 8. @PreDestroy / destroy() / custom destroy-method.",
              "tags": ["lifecycle", "postconstruct", "predestroy"],
              "difficulty": "intermediate"
            },
            {
              "id": "sc-013",
              "question": "What is @PostConstruct and @PreDestroy?",
              "answer": "@PostConstruct annotates a method called after dependency injection is complete, used for initialization logic. @PreDestroy annotates a method called before the bean is destroyed, used for cleanup. Both are JSR-250 annotations. Only called for singleton-scoped beans by default (not prototype).",
              "tags": ["lifecycle", "postconstruct", "predestroy"],
              "difficulty": "beginner"
            },
            {
              "id": "sc-014",
              "question": "What is @Profile and how do you activate profiles?",
              "answer": "@Profile('dev') restricts a bean or @Configuration class to load only when the named profile is active. Activate via: spring.profiles.active=dev in properties, -Dspring.profiles.active=dev JVM arg, @ActiveProfiles in tests, or programmatically via ConfigurableEnvironment.setActiveProfiles().",
              "tags": ["profile", "environment", "conditional"],
              "difficulty": "beginner"
            },
            {
              "id": "sc-015",
              "question": "What is BeanFactory vs ApplicationContext?",
              "answer": "BeanFactory is the basic IoC container with lazy bean initialization and basic DI. ApplicationContext extends BeanFactory and adds: eager singleton initialization, event publishing (ApplicationEventPublisher), i18n (MessageSource), AOP support, and web-specific features. Always prefer ApplicationContext.",
              "tags": ["beanfactory", "applicationcontext", "container"],
              "difficulty": "intermediate"
            },
            {
              "id": "sc-016",
              "question": "What is @Lazy and what problem does it solve?",
              "answer": "@Lazy on a bean delays its initialization until first accessed rather than at container startup. Useful for expensive resources, breaking circular dependency issues, or reducing startup time. Can be placed on @Bean methods or @Component classes.",
              "tags": ["lazy", "initialization", "performance"],
              "difficulty": "intermediate"
            },
            {
              "id": "sc-017",
              "question": "How do you inject all beans of a type into a collection?",
              "answer": "Declare the injection target as List<MyInterface>, Set<MyInterface>, or Map<String, MyInterface> and annotate with @Autowired. Spring injects all beans implementing that type. For Map, keys are bean names. Use @Order or implement Ordered to control list order.",
              "tags": ["autowired", "collection", "list"],
              "difficulty": "intermediate"
            },
            {
              "id": "sc-018",
              "question": "What is @ComponentScan and what are its key attributes?",
              "answer": "@ComponentScan tells Spring where to look for @Component-annotated classes. Key attributes: basePackages (packages to scan), basePackageClasses (type-safe package reference), includeFilters and excludeFilters (ANNOTATION, ASSIGNABLE_TYPE, REGEX types). @SpringBootApplication includes @ComponentScan of the main class's package.",
              "tags": ["componentscan", "scanning", "packages"],
              "difficulty": "intermediate"
            },
            {
              "id": "sc-019",
              "question": "What is @Import and when would you use it?",
              "answer": "@Import imports one or more @Configuration classes, @ImportSelector implementations, or @ImportBeanDefinitionRegistrar implementations into the current context. Used to modularize configuration — import sub-configs explicitly without relying on component scanning.",
              "tags": ["import", "configuration", "modular"],
              "difficulty": "intermediate"
            },
            {
              "id": "sc-020",
              "question": "What is a BeanPostProcessor and give a real example?",
              "answer": "BeanPostProcessor intercepts bean initialization with postProcessBeforeInitialization() and postProcessAfterInitialization(). Real examples: AutowiredAnnotationBeanPostProcessor (processes @Autowired), CommonAnnotationBeanPostProcessor (processes @PostConstruct/@PreDestroy), and Spring AOP creates proxies via AbstractAdvisorAutoProxyCreator.",
              "tags": ["beanpostprocessor", "aop", "lifecycle"],
              "difficulty": "advanced"
            },
            {
              "id": "sc-021",
              "question": "What is a BeanFactoryPostProcessor and how does it differ from a BeanPostProcessor?",
              "answer": "BeanFactoryPostProcessor (BFPP) operates on the bean configuration metadata/definitions before any bean instances are created. It allows modifying or adding bean definitions. BeanPostProcessor (BPP) operates on the bean instances after instantiation, processing injections (@Autowired, @PostConstruct) or creating proxy wrappers. In Java configuration, BFPP beans must be declared static.",
              "tags": ["beanfactorypostprocessor", "beanpostprocessor", "lifecycle"],
              "difficulty": "advanced"
            },
            {
              "id": "sc-022",
              "question": "How does Spring's Event mechanism work and what annotations are involved?",
              "answer": "Spring uses the Observer pattern for event handling. Components publish events using ApplicationEventPublisher.publishEvent(Object). Listeners consume events by annotating a method with @EventListener. Use @Async to handle events asynchronously, which requires @EnableAsync on a configuration class.",
              "tags": ["events", "eventlistener", "async"],
              "difficulty": "intermediate"
            },
            {
              "id": "sc-023",
              "question": "What is the difference between @Bean and @Component and how does it impact bean wiring?",
              "answer": "@Component is a class-level annotation for auto-detection via component scanning. @Bean is a method-level annotation used within @Configuration classes, typically to configure third-party classes. In a @Configuration class, calling another @Bean method returns the cached singleton container instance (inter-bean reference), whereas in a plain @Component class (lite mode), it performs a standard Java method call creating a new instance.",
              "tags": ["bean", "component", "configuration"],
              "difficulty": "intermediate"
            },
            {
              "id": "sc-024",
              "question": "How do you handle optional dependencies using @Autowired?",
              "answer": "By default, @Autowired throws NoSuchBeanDefinitionException if a matching bean is not found. You can make it optional using: (1) @Autowired(required = false), (2) wrapping the dependency in Optional<MyService>, (3) using @Nullable annotation on the field/parameter. If optional, the field/parameter will be null or Optional.empty().",
              "tags": ["autowired", "optional", "nullable"],
              "difficulty": "beginner"
            }
          ]
        },
        {
          "id": "spring-aop",
          "title": "Aspect-Oriented Programming (AOP)",
          "weight": 8,
          "cards": [
            {
              "id": "aop-001",
              "question": "What problem does AOP solve and what are its core concepts?",
              "answer": "AOP separates cross-cutting concerns (logging, transactions, security) from business logic. Core concepts: Aspect (the module of cross-cutting concern), Join Point (execution point like a method call), Advice (action taken at a join point), Pointcut (expression selecting join points), Weaving (applying aspects to target objects).",
              "tags": ["aop", "crosscutting", "concepts"],
              "difficulty": "beginner"
            },
            {
              "id": "aop-002",
              "question": "What are the five types of AOP advice in Spring?",
              "answer": "@Before — runs before the method. @After — runs after regardless of outcome. @AfterReturning — runs after successful return (access return value via returning attribute). @AfterThrowing — runs after exception (access exception via throwing attribute). @Around — wraps the method; must call ProceedingJoinPoint.proceed() to invoke original.",
              "tags": ["advice", "before", "after", "around"],
              "difficulty": "beginner"
            },
            {
              "id": "aop-003",
              "question": "What is the most powerful advice type and why?",
              "answer": "@Around is the most powerful — it can control whether the method executes at all (by calling or skipping proceed()), modify arguments before, modify the return value after, and handle exceptions. It must call joinPoint.proceed() to invoke the actual method and return its result.",
              "tags": ["around", "advice", "proceed"],
              "difficulty": "intermediate"
            },
            {
              "id": "aop-004",
              "question": "What is a Pointcut expression and explain the execution() designator?",
              "answer": "execution() matches method execution join points. Syntax: execution([modifiers] return-type [class].method(args)). Example: execution(* com.example.service.*.*(..)) matches any method in any class in the service package. Wildcards: * = any single element, .. = any args or any subpackage.",
              "tags": ["pointcut", "execution", "expression"],
              "difficulty": "intermediate"
            },
            {
              "id": "aop-005",
              "question": "What are other common Pointcut designators besides execution()?",
              "answer": "within(TypePattern) — matches all methods within a type. @annotation(AnnotationType) — matches methods with a specific annotation. @within(AnnotationType) — matches all methods in classes with annotation. args(TypePattern) — matches by argument types. bean(beanName) — matches a specific Spring bean name.",
              "tags": ["pointcut", "within", "annotation"],
              "difficulty": "intermediate"
            },
            {
              "id": "aop-006",
              "question": "How does Spring AOP implement aspect weaving and what is a limitation?",
              "answer": "Spring AOP uses runtime weaving via JDK dynamic proxies (for interface-based beans) or CGLIB proxies (for class-based beans). Limitation: AOP only works for Spring-managed beans called from outside the bean — self-invocation (calling a method on 'this' within the same class) bypasses the proxy and AOP advice is not applied.",
              "tags": ["proxy", "cglib", "weaving", "limitation"],
              "difficulty": "advanced"
            },
            {
              "id": "aop-007",
              "question": "How do you enable AOP in a Spring application?",
              "answer": "Add @EnableAspectJAutoProxy to a @Configuration class. In Spring Boot it is auto-enabled. Create a @Component class annotated with @Aspect, then define @Pointcut and advice methods inside it. Add spring-boot-starter-aop or spring-aspects dependency.",
              "tags": ["enableaspectjautoprxy", "aspect", "configuration"],
              "difficulty": "beginner"
            },
            {
              "id": "aop-008",
              "question": "What is JoinPoint and ProceedingJoinPoint?",
              "answer": "JoinPoint is available in @Before, @After, @AfterReturning, @AfterThrowing — gives access to method signature, args, and target object. ProceedingJoinPoint extends JoinPoint and is only available in @Around advice — adds proceed() to invoke the actual method, and proceed(newArgs) to pass modified arguments.",
              "tags": ["joinpoint", "proceedingjoinpoint", "around"],
              "difficulty": "intermediate"
            },
            {
              "id": "aop-009",
              "question": "What are the differences between Spring AOP and AspectJ?",
              "answer": "Spring AOP: (1) Proxy-based, (2) Only supports method execution join points, (3) Weaving occurs at runtime, (4) Limited by self-invocation (calling 'this'). AspectJ: (1) Bytecode-based (compiler/load-time weaving), (2) Supports field access, constructor, and method execution join points, (3) Weaving occurs at compile-time/load-time, (4) Not limited by self-invocation.",
              "tags": ["aop", "aspectj", "weaving"],
              "difficulty": "advanced"
            },
            {
              "id": "aop-010",
              "question": "How do JDK Dynamic Proxies and CGLIB Proxies differ in Spring AOP?",
              "answer": "JDK Dynamic Proxy: Uses Java reflection to proxy interfaces. The target class must implement at least one interface. CGLIB Proxy: Generates a subclass of the target class at runtime. Used when the target class has no interfaces. Limitations: CGLIB cannot proxy final classes or final/private methods because it relies on subclassing and method overriding.",
              "tags": ["proxy", "jdk-proxy", "cglib"],
              "difficulty": "advanced"
            }
          ]
        },
        {
          "id": "data-management",
          "title": "Data Management",
          "weight": 18,
          "cards": [
            {
              "id": "dm-001",
              "question": "What is JdbcTemplate and what boilerplate does it eliminate?",
              "answer": "JdbcTemplate is Spring's JDBC abstraction that eliminates: opening/closing connections, creating statements, iterating ResultSets, catching SQLExceptions, and transaction management. You provide SQL and a RowMapper; Spring handles everything else. Common methods: query(), queryForObject(), update(), batchUpdate().",
              "tags": ["jdbc", "jdbctemplate", "sql"],
              "difficulty": "beginner"
            },
            {
              "id": "dm-002",
              "question": "What is RowMapper and how do you use it with JdbcTemplate?",
              "answer": "RowMapper<T> is a functional interface with mapRow(ResultSet rs, int rowNum) that maps each row to an object. Example: jdbcTemplate.query('SELECT * FROM users', (rs, rowNum) -> new User(rs.getLong('id'), rs.getString('name'))). BeanPropertyRowMapper auto-maps columns to bean properties by name convention.",
              "tags": ["rowmapper", "jdbctemplate", "resultset"],
              "difficulty": "intermediate"
            },
            {
              "id": "dm-003",
              "question": "How does Spring translate SQL exceptions?",
              "answer": "Spring translates vendor-specific SQLExceptions into a hierarchy of DataAccessExceptions (unchecked). @Repository beans automatically get exception translation via PersistenceExceptionTranslationPostProcessor. This decouples business logic from specific database vendors.",
              "tags": ["exception", "dataaccessexception", "repository"],
              "difficulty": "intermediate"
            },
            {
              "id": "dm-004",
              "question": "What does @Transactional do and what are its default settings?",
              "answer": "@Transactional wraps the method in a database transaction. Defaults: propagation=REQUIRED (join existing or create new), isolation=DEFAULT (database default), readOnly=false, rollbackFor=RuntimeException and Error only (checked exceptions do NOT trigger rollback by default), timeout=-1 (no timeout).",
              "tags": ["transactional", "transaction", "defaults"],
              "difficulty": "beginner"
            },
            {
              "id": "dm-005",
              "question": "What are all Spring transaction propagation types?",
              "answer": "REQUIRED (default) — join existing or create new. REQUIRES_NEW — always create new, suspend existing. NESTED — nested savepoint within existing. SUPPORTS — join if exists, else non-transactional. NOT_SUPPORTED — always non-transactional, suspend existing. MANDATORY — must join existing or throw. NEVER — must be non-transactional or throw.",
              "tags": ["propagation", "transaction", "required"],
              "difficulty": "intermediate"
            },
            {
              "id": "dm-006",
              "question": "What are Spring transaction isolation levels?",
              "answer": "DEFAULT (use DB default), READ_UNCOMMITTED (dirty reads allowed), READ_COMMITTED (prevents dirty reads, default for most DBs), REPEATABLE_READ (prevents dirty + non-repeatable reads), SERIALIZABLE (prevents all anomalies, slowest). Higher isolation = fewer anomalies but lower concurrency.",
              "tags": ["isolation", "transaction", "database"],
              "difficulty": "intermediate"
            },
            {
              "id": "dm-007",
              "question": "How do you make @Transactional roll back for checked exceptions?",
              "answer": "By default only RuntimeException and Error trigger rollback. To include checked exceptions use: @Transactional(rollbackFor = Exception.class) or @Transactional(rollbackFor = {IOException.class, SQLException.class}). To prevent rollback on RuntimeException: @Transactional(noRollbackFor = MyRuntimeException.class).",
              "tags": ["rollback", "transactional", "exception"],
              "difficulty": "intermediate"
            },
            {
              "id": "dm-008",
              "question": "What is the @Transactional self-invocation problem?",
              "answer": "Calling a @Transactional method from within the same bean (this.method()) bypasses the Spring proxy, so the transaction advice is NOT applied. Solution: inject the bean into itself via @Autowired, use ApplicationContext.getBean(), or restructure into two beans.",
              "tags": ["transactional", "self-invocation", "proxy"],
              "difficulty": "advanced"
            },
            {
              "id": "dm-009",
              "question": "What annotations does JPA use to define an entity?",
              "answer": "@Entity marks a class as a JPA managed entity. @Table(name='table_name') optionally specifies the table. @Id marks the primary key field. @GeneratedValue specifies key generation strategy. @Column(name='col', nullable=false) maps to a column. @Transient excludes a field from persistence.",
              "tags": ["jpa", "entity", "annotation"],
              "difficulty": "beginner"
            },
            {
              "id": "dm-010",
              "question": "What are the @GeneratedValue strategies?",
              "answer": "AUTO — JPA picks strategy (default). IDENTITY — database auto-increment column (MySQL, PostgreSQL serial). SEQUENCE — uses a DB sequence object (Oracle, PostgreSQL). TABLE — uses a special table to simulate sequences (portable but slow). SEQUENCE is generally preferred for performance.",
              "tags": ["generatedvalue", "jpa", "primarykey"],
              "difficulty": "intermediate"
            },
            {
              "id": "dm-011",
              "question": "What are the JPA relationship annotations and their key attributes?",
              "answer": "@OneToOne, @OneToMany, @ManyToOne, @ManyToMany. Key attributes: mappedBy (inverse side owner), cascade (CascadeType.ALL/PERSIST/MERGE/REMOVE/REFRESH/DETACH), fetch (FetchType.LAZY/EAGER), orphanRemoval. The @JoinColumn is on the owning side (the table that has the foreign key).",
              "tags": ["onetomany", "manytoone", "relationship", "jpa"],
              "difficulty": "intermediate"
            },
            {
              "id": "dm-012",
              "question": "What is the N+1 query problem and how do you solve it?",
              "answer": "N+1 occurs when loading N parent entities triggers N additional queries for their lazy-loaded children. Solutions: (1) JPQL JOIN FETCH — fetch authors with books in one query. (2) @EntityGraph — define fetch plan. (3) @BatchSize — batch load in groups. (4) Switch to EAGER fetch (careful — always loads). (5) DTO projections.",
              "tags": ["n+1", "fetch", "performance", "jpa"],
              "difficulty": "advanced"
            },
            {
              "id": "dm-013",
              "question": "How does Spring Data JPA's derived query mechanism work?",
              "answer": "Spring Data parses repository method names and generates JPQL automatically. Pattern: find/count/exists/deleteBy + [Subject] + [Predicate]. Keywords: And, Or, Between, LessThan, GreaterThan, Like, In, IsNull, OrderBy, Distinct. Example: findByEmailAndAgeGreaterThan(String email, int age) generates: WHERE email = ? AND age > ?",
              "tags": ["derived-query", "spring-data", "repository"],
              "difficulty": "intermediate"
            },
            {
              "id": "dm-014",
              "question": "What is @Query in Spring Data JPA and when do you use it?",
              "answer": "@Query('SELECT u FROM User u WHERE u.email = :email') — custom JPQL on a repository method. Use nativeQuery=true for raw SQL. Use @Modifying with @Query for UPDATE/DELETE statements. @Modifying also needs @Transactional on the repository method.",
              "tags": ["query", "jpql", "spring-data", "modifying"],
              "difficulty": "intermediate"
            },
            {
              "id": "dm-015",
              "question": "What does CrudRepository provide vs JpaRepository?",
              "answer": "CrudRepository provides: save, saveAll, findById, existsById, findAll, findAllById, count, deleteById, delete, deleteAll. JpaRepository extends PagingAndSortingRepository (adds findAll(Pageable), findAll(Sort)) and adds: saveAndFlush, deleteInBatch, getOne, flush. Use JpaRepository for JPA-specific features.",
              "tags": ["crudrepository", "jparepository", "spring-data"],
              "difficulty": "beginner"
            },
            {
              "id": "dm-016",
              "question": "What is Pageable and how do you use pagination in Spring Data?",
              "answer": "Pageable represents page number, page size, and sort. Create with PageRequest.of(page, size) or PageRequest.of(page, size, Sort.by('name')). Repository method returns Page<T> (includes total count) or Slice<T> (no count, more efficient). Example: Page<User> findByActive(boolean active, Pageable pageable).",
              "tags": ["pageable", "pagination", "spring-data"],
              "difficulty": "intermediate"
            },
            {
              "id": "dm-017",
              "question": "What are the four JPA/Hibernate entity lifecycle states and how do they transition?",
              "answer": "(1) Transient: New instance, not in DB, not managed. (2) Managed (Persistent): In DB, managed by EntityManager (EM). Persist/find moves to Managed. (3) Detached: In DB, no longer managed by EM (occurs after clear/close/detach or serialization). Merge moves it back to Managed. (4) Removed: Scheduled for deletion (remove moves it here).",
              "tags": ["jpa", "entity-states", "entitymanager"],
              "difficulty": "advanced"
            },
            {
              "id": "dm-018",
              "question": "What is the purpose of @Modifying in Spring Data JPA and when must it be used?",
              "answer": "@Modifying is required on repository methods executing UPDATE or DELETE queries with @Query. It triggers the executeUpdate() statement instead of executeQuery(). It should be combined with @Transactional. Use clearAutomatically=true to clear the EntityManager cache afterward, preventing stale data.",
              "tags": ["modifying", "spring-data", "jpa"],
              "difficulty": "intermediate"
            },
            {
              "id": "dm-019",
              "question": "What is the difference between Declarative and Programmatic transaction management in Spring?",
              "answer": "Declarative: Uses @Transactional (AOP/proxy-based) to define transaction boundaries metadata-driven. Cleanest and preferred. Programmatic: Uses TransactionTemplate or PlatformTransactionManager directly in code. Used when fine-grained control is needed (e.g., executing code in a transaction that is smaller than a whole method).",
              "tags": ["transactional", "programmatic", "transactiontemplate"],
              "difficulty": "intermediate"
            },
            {
              "id": "dm-020",
              "question": "What is optimistic locking in JPA and how does @Version implement it?",
              "answer": "Optimistic locking assumes conflicts are rare — no DB lock is acquired on read. Instead, a version field is checked on write.\n\n@Version on an Integer/Long/Timestamp field: JPA automatically includes version in UPDATE WHERE clause: UPDATE user SET name=?, version=2 WHERE id=? AND version=1. If 0 rows updated → OptimisticLockException (another transaction modified the row).\n\nVs Pessimistic locking (@Lock(LockModeType.PESSIMISTIC_WRITE)): Issues a SELECT FOR UPDATE to acquire a DB-level lock on read. Prevents concurrent reads too. Use when conflict probability is high (e.g., inventory reservation).\n\nBest practice: Optimistic locking for most web apps; Pessimistic for high-contention critical sections.",
              "tags": ["optimistic-locking", "version", "concurrency"],
              "difficulty": "advanced"
            },
            {
              "id": "dm-021",
              "question": "What is Spring Data JPA Specification and how do you build dynamic queries?",
              "answer": "Specification<T> is a functional interface (wraps JPA Criteria API predicates) for building type-safe, composable dynamic queries.\n\nRepository must extend JpaSpecificationExecutor<T>.\n\nExample:\nSpecification<User> hasEmail = (root, query, cb) -> cb.equal(root.get('email'), email);\nSpecification<User> isActive = (root, query, cb) -> cb.isTrue(root.get('active'));\nuserRepo.findAll(hasEmail.and(isActive));\n\nSpecifications can be ANDed, ORed, and negated. Good for search pages with optional filters.\n\nAlternative: QueryDSL (BooleanBuilder) — generates a Q-class from entities at compile time, provides IDE autocomplete, and is generally more readable for complex predicates.",
              "tags": ["specification", "dynamic-query", "criteria-api"],
              "difficulty": "advanced"
            },
            {
              "id": "dm-022",
              "question": "What is Spring Data Auditing and how do you enable it?",
              "answer": "Spring Data can automatically populate audit fields (who created/modified a record and when).\n\nSetup:\n1. Add @EnableJpaAuditing on a @Configuration class.\n2. On the entity, add @EntityListeners(AuditingEntityListener.class).\n3. Annotate fields:\n   @CreatedDate LocalDateTime createdAt\n   @LastModifiedDate LocalDateTime updatedAt\n   @CreatedBy String createdBy\n   @LastModifiedBy String modifiedBy\n4. For @CreatedBy/@LastModifiedBy, implement AuditorAware<String> bean returning the current user (e.g., from SecurityContextHolder).\n\nUse with @MappedSuperclass to share audit fields across all entities.",
              "tags": ["auditing", "createddate", "entitylisteners"],
              "difficulty": "intermediate"
            },
            {
              "id": "dm-023",
              "question": "What is a DTO projection in Spring Data JPA and what types are available?",
              "answer": "DTO projections allow fetching only specific fields instead of full entities, improving performance.\n\nTypes:\n1. Interface-based Closed Projections: interface UserSummary { String getName(); String getEmail(); }. Spring generates a proxy at runtime. Only selects the needed columns.\n2. Interface-based Open Projections: getter annotated with @Value('#{target.firstName + \" \" + target.lastName}'). Can transform data but loads all columns.\n3. Class-based (DTO) Projections: A record or class with a constructor matching selected fields. JPQL constructor expression: SELECT new com.app.UserDto(u.name, u.email) FROM User u.\n4. Dynamic Projections: Generic method findBy...(Class<T> type) — call with different projection types at runtime.",
              "tags": ["projection", "dto", "spring-data"],
              "difficulty": "intermediate"
            }
          ]
        },
        {
          "id": "spring-mvc",
          "title": "Spring MVC & REST",
          "weight": 20,
          "cards": [
            {
              "id": "mvc-001",
              "question": "What is the DispatcherServlet and its role in Spring MVC?",
              "answer": "DispatcherServlet is the Front Controller in Spring MVC. Flow: receives all HTTP requests → consults HandlerMapping to find the controller → delegates to HandlerAdapter → controller returns ModelAndView → DispatcherServlet consults ViewResolver → renders view → returns response.",
              "tags": ["dispatcherservlet", "frontcontroller", "mvc"],
              "difficulty": "beginner"
            },
            {
              "id": "mvc-002",
              "question": "What is the difference between @Controller and @RestController?",
              "answer": "@Controller marks an MVC controller; methods return view names by default resolved by ViewResolver. @RestController = @Controller + @ResponseBody on every method, so return values are serialized directly to HTTP response body (as JSON/XML via HttpMessageConverter). Used for REST APIs.",
              "tags": ["controller", "restcontroller", "rest"],
              "difficulty": "beginner"
            },
            {
              "id": "mvc-003",
              "question": "What are the HTTP method mapping shortcut annotations?",
              "answer": "@GetMapping — GET requests. @PostMapping — POST. @PutMapping — PUT. @DeleteMapping — DELETE. @PatchMapping — PATCH. All are composed annotations of @RequestMapping(method=RequestMethod.XXX). Can be applied at class level (base path) and method level (sub-path).",
              "tags": ["getmapping", "postmapping", "requestmapping"],
              "difficulty": "beginner"
            },
            {
              "id": "mvc-004",
              "question": "What is the difference between @PathVariable and @RequestParam?",
              "answer": "@PathVariable extracts values from the URI template path: /users/{id} → @PathVariable Long id. @RequestParam extracts query string parameters: /users?name=John → @RequestParam String name. Both support required (default true) and defaultValue attributes. @RequestParam can also bind form data.",
              "tags": ["pathvariable", "requestparam", "url"],
              "difficulty": "beginner"
            },
            {
              "id": "mvc-005",
              "question": "What is @RequestBody and how does it work?",
              "answer": "@RequestBody deserializes the HTTP request body into a Java object using a registered HttpMessageConverter (Jackson for JSON by default). Spring reads the Content-Type header to select the converter. Add @Valid to trigger bean validation on the deserialized object.",
              "tags": ["requestbody", "json", "jackson"],
              "difficulty": "beginner"
            },
            {
              "id": "mvc-006",
              "question": "What is ResponseEntity and when should you use it?",
              "answer": "ResponseEntity<T> gives full control over the HTTP response: status code, headers, and body. Use when you need custom status codes or headers. Example: return ResponseEntity.status(HttpStatus.CREATED).header('Location', uri).body(createdUser). For simple cases, just return the object and use @ResponseStatus.",
              "tags": ["responseentity", "httpstatus", "headers"],
              "difficulty": "intermediate"
            },
            {
              "id": "mvc-007",
              "question": "What is @ExceptionHandler and @ControllerAdvice?",
              "answer": "@ExceptionHandler on a method handles specific exceptions thrown by @RequestMapping methods in the same controller. @ControllerAdvice makes exception handlers global (applies to all controllers). Combine them for a centralized error handling class. @RestControllerAdvice = @ControllerAdvice + @ResponseBody.",
              "tags": ["exceptionhandler", "controlleradvice", "error"],
              "difficulty": "intermediate"
            },
            {
              "id": "mvc-008",
              "question": "What is content negotiation in Spring MVC?",
              "answer": "Content negotiation selects the response format based on: (1) Accept header (e.g. application/json), (2) URL extension (.json, .xml — deprecated), (3) request parameter (format=json). Spring uses HttpMessageConverters to convert to the requested format. Jackson handles JSON, JAXB handles XML.",
              "tags": ["content-negotiation", "accept", "messagecoverter"],
              "difficulty": "intermediate"
            },
            {
              "id": "mvc-009",
              "question": "What is @RequestHeader and @CookieValue?",
              "answer": "@RequestHeader('Authorization') String authHeader — binds a specific HTTP request header to a method parameter. @CookieValue('sessionId') String sessionId — binds a cookie value. Both support required and defaultValue attributes similar to @RequestParam.",
              "tags": ["requestheader", "cookievalue", "http"],
              "difficulty": "intermediate"
            },
            {
              "id": "mvc-010",
              "question": "What is RestTemplate and what are its main methods?",
              "answer": "RestTemplate is a synchronous HTTP client for consuming REST APIs. Key methods: getForObject(url, Class), getForEntity(url, Class) returns ResponseEntity, postForObject(url, body, Class), postForEntity, exchange() for full control (any method, headers, body). Deprecated in favor of WebClient for reactive apps.",
              "tags": ["resttemplate", "http-client", "rest"],
              "difficulty": "intermediate"
            },
            {
              "id": "mvc-011",
              "question": "What is @ResponseStatus?",
              "answer": "@ResponseStatus(HttpStatus.CREATED) on a controller method sets the HTTP response status code. On a custom Exception class it sets the default status when that exception is thrown. Overridden by ResponseEntity if returned.",
              "tags": ["responsestatus", "httpstatus", "annotation"],
              "difficulty": "beginner"
            },
            {
              "id": "mvc-012",
              "question": "How do you validate request data in Spring MVC?",
              "answer": "Add @Valid or @Validated to the @RequestBody or method parameter. Use JSR-380 annotations on the model: @NotNull, @NotBlank, @Size, @Min, @Max, @Email, @Pattern. Handle MethodArgumentNotValidException in @ExceptionHandler or @ControllerAdvice to return validation error details.",
              "tags": ["validation", "valid", "notnull"],
              "difficulty": "intermediate"
            },
            {
              "id": "mvc-013",
              "question": "What is the difference between @ModelAttribute and @RequestBody?",
              "answer": "@ModelAttribute binds form data (application/x-www-form-urlencoded) or query parameters to an object — used in traditional MVC form submissions. @RequestBody binds JSON/XML request body — used in REST APIs. They should not be used together for the same parameter.",
              "tags": ["modelattribute", "requestbody", "form"],
              "difficulty": "intermediate"
            },
            {
              "id": "mvc-014",
              "question": "What is a HandlerInterceptor?",
              "answer": "HandlerInterceptor intercepts requests at three points: preHandle() (before controller — return false to abort), postHandle() (after controller, before view rendering — can modify ModelAndView), afterCompletion() (after complete request — for cleanup). Register via WebMvcConfigurer.addInterceptors().",
              "tags": ["interceptor", "handlerinterceptor", "filter"],
              "difficulty": "intermediate"
            },
            {
              "id": "mvc-015",
              "question": "What is WebClient and how does it compare to RestTemplate?",
              "answer": "WebClient is a modern, non-blocking, reactive HTTP client from the spring-webflux module. It supports both synchronous (via block()) and asynchronous/reactive requests (returning Mono/Flux). RestTemplate is a legacy, synchronous, blocking client from spring-web and is in maintenance mode. WebClient is preferred for all new development.",
              "tags": ["webclient", "resttemplate", "reactive"],
              "difficulty": "intermediate"
            },
            {
              "id": "mvc-016",
              "question": "How does CORS work and how is it configured in Spring MVC?",
              "answer": "CORS (Cross-Origin Resource Sharing) is a browser security mechanism. Spring MVC configures it via: (1) @CrossOrigin annotation on controllers or methods, (2) implementing WebMvcConfigurer and overriding addCorsMappings() for global configuration. If Spring Security is present, CORS must also be enabled in the security filter chain.",
              "tags": ["cors", "security", "webmvcconfigurer"],
              "difficulty": "intermediate"
            }
          ]
        },
        {
          "id": "spring-testing",
          "title": "Testing",
          "weight": 14,
          "cards": [
            {
              "id": "test-001",
              "question": "What is @SpringBootTest and what does it do?",
              "answer": "@SpringBootTest loads the full Spring application context for integration tests. By default starts without a server. Use webEnvironment=RANDOM_PORT or DEFINED_PORT to start a real server. Use webEnvironment=MOCK (default) with @AutoConfigureMockMvc for mock MVC testing without a real server.",
              "tags": ["springboottest", "integration", "context"],
              "difficulty": "beginner"
            },
            {
              "id": "test-002",
              "question": "What are Spring Boot test slice annotations and why use them?",
              "answer": "Slice tests load only a specific layer of the context, making tests faster. Key slices: @WebMvcTest (MVC layer only), @DataJpaTest (JPA layer with in-memory DB), @DataJdbcTest (JDBC), @JsonTest (JSON serialization), @WebFluxTest (reactive MVC). Beans outside the slice must be mocked with @MockBean.",
              "tags": ["slice", "webmvctest", "datajpatest"],
              "difficulty": "intermediate"
            },
            {
              "id": "test-003",
              "question": "What is @WebMvcTest?",
              "answer": "@WebMvcTest(UserController.class) loads only the MVC layer: controllers, filters, HandlerInterceptors, WebMvcConfigurer, but NOT @Service or @Repository beans (mock them with @MockBean). Auto-configures MockMvc. Much faster than @SpringBootTest for testing controller logic.",
              "tags": ["webmvctest", "mockmvc", "controller"],
              "difficulty": "intermediate"
            },
            {
              "id": "test-004",
              "question": "What is MockMvc and how do you perform a request?",
              "answer": "MockMvc tests Spring MVC controllers without a real HTTP server. Example: mockMvc.perform(get('/users/1').accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk()).andExpect(jsonPath('$.name').value('John')). Import static methods from MockMvcRequestBuilders and MockMvcResultMatchers.",
              "tags": ["mockmvc", "perform", "andexpect"],
              "difficulty": "beginner"
            },
            {
              "id": "test-005",
              "question": "What is @DataJpaTest?",
              "answer": "@DataJpaTest configures an in-memory H2 database (by default), scans for @Entity classes and JPA repositories, and rolls back each test in a transaction. Does NOT load @Service or @Component beans. Use @AutoConfigureTestDatabase(replace=NONE) to use the real database.",
              "tags": ["datajpatest", "h2", "repository"],
              "difficulty": "intermediate"
            },
            {
              "id": "test-006",
              "question": "What is @MockBean vs @Mock?",
              "answer": "@MockBean (Spring) creates a Mockito mock AND registers it as a Spring bean, replacing any existing bean of the same type in the ApplicationContext — use in Spring integration tests. @Mock (Mockito) creates a mock for unit tests without Spring context. @MockBean is slower (rebuilds context if new); @Mock is fast.",
              "tags": ["mockbean", "mock", "mockito"],
              "difficulty": "intermediate"
            },
            {
              "id": "test-007",
              "question": "What is @ExtendWith(SpringExtension.class)?",
              "answer": "Integrates the Spring TestContext Framework with JUnit 5. It is automatically included when using @SpringBootTest, @WebMvcTest, @DataJpaTest and other Spring test annotations — you rarely need to add it manually. It enables @Autowired, @MockBean, and @ActiveProfiles in tests.",
              "tags": ["extendwith", "springextension", "junit5"],
              "difficulty": "beginner"
            },
            {
              "id": "test-008",
              "question": "What is @ActiveProfiles in tests?",
              "answer": "@ActiveProfiles('test') activates the named Spring profile(s) for the test class. This loads test-specific beans or properties (e.g. application-test.properties). Combine multiple: @ActiveProfiles({'test', 'mock-email'}).",
              "tags": ["activeprofiles", "profile", "test"],
              "difficulty": "beginner"
            },
            {
              "id": "test-009",
              "question": "What is @TestPropertySource?",
              "answer": "@TestPropertySource(locations='classpath:test.properties') or @TestPropertySource(properties={'spring.datasource.url=jdbc:h2:mem:test'}) overrides application properties for a specific test class. Higher priority than application.properties.",
              "tags": ["testpropertysource", "properties", "test"],
              "difficulty": "intermediate"
            },
            {
              "id": "test-010",
              "question": "How do you test with TestRestTemplate?",
              "answer": "TestRestTemplate is available in @SpringBootTest with a real server (RANDOM_PORT/DEFINED_PORT). Auto-configured and injected. It is fault-tolerant (does not throw on 4xx/5xx by default). Example: ResponseEntity<User> resp = testRestTemplate.getForEntity('/users/1', User.class);",
              "tags": ["testresttemplate", "integration", "http"],
              "difficulty": "intermediate"
            },
            {
              "id": "test-011",
              "question": "What is @Sql and @SqlGroup?",
              "answer": "@Sql(scripts='/schema.sql', executionPhase=BEFORE_TEST_METHOD) runs SQL scripts before or after a test. @SqlGroup allows multiple @Sql annotations on one method. Useful in @DataJpaTest to set up test data. executionPhase options: BEFORE_TEST_METHOD (default) or AFTER_TEST_METHOD.",
              "tags": ["sql", "test", "database"],
              "difficulty": "intermediate"
            },
            {
              "id": "test-012",
              "question": "What is the difference between unit tests and integration tests in Spring?",
              "answer": "Unit tests test a single class in isolation using mocks (Mockito @Mock, @InjectMocks), no Spring context loaded — very fast. Integration tests load part or all of the Spring context (@SpringBootTest, @DataJpaTest) to test how components work together — slower. Aim for mostly unit tests, fewer integration tests (test pyramid).",
              "tags": ["unit", "integration", "test-pyramid"],
              "difficulty": "beginner"
            },
            {
              "id": "test-013",
              "question": "How does Spring Test Context Caching work and what can cause a context refresh?",
              "answer": "The Spring TestContext Framework caches ApplicationContexts for performance. It creates a cache key based on configuration parameters (@SpringBootTest settings, profiles, property sources, context loaders). If multiple tests have the exact same configuration, they reuse the same context. A new configuration triggers a context load (cache miss), slowing tests.",
              "tags": ["testing", "context-caching", "performance"],
              "difficulty": "advanced"
            },
            {
              "id": "test-014",
              "question": "What is @DirtiesContext and how does it affect test performance?",
              "answer": "@DirtiesContext marks the ApplicationContext as 'dirty', forcing Spring to remove it from the cache and rebuild it for subsequent tests. Use it when a test modifies a singleton bean's state or the context setup. Because reloading the context is expensive, excessive use of @DirtiesContext severely slows down test suite execution.",
              "tags": ["dirtiescontext", "context-caching", "testing"],
              "difficulty": "intermediate"
            },
            {
              "id": "test-015",
              "question": "What is the difference between @ExtendWith(SpringExtension.class) and @ExtendWith(MockitoExtension.class)?",
              "answer": "SpringExtension integrates JUnit 5 with Spring's TestContext Framework, enabling @Autowired, test slices (@WebMvcTest), and @MockBean. MockitoExtension is a pure Mockito runner that initializes @Mock and @InjectMocks without loading a Spring ApplicationContext, making unit tests extremely fast.",
              "tags": ["springextension", "mockitoextension", "junit5"],
              "difficulty": "intermediate"
            },
            {
              "id": "test-016",
              "question": "What is @WebMvcTest and how does it differ from @SpringBootTest for testing controllers?",
              "answer": "@WebMvcTest(UserController.class): Loads only the web layer — controllers, filters, @ControllerAdvice, Jackson/Gson converters. Does NOT load @Service or @Repository beans. All dependencies of the controller must be provided as @MockBean.\n\nAdvantages: Much faster than @SpringBootTest (no full app context). Focused on the controller layer only.\n\nIncludes: MockMvc is auto-configured. HttpMessageConverters are loaded.\n\n@SpringBootTest + @AutoConfigureMockMvc: Loads the full application context. Tests the entire stack (controller → service → repository). Use for integration tests.\n\nPattern: Unit test controllers with @WebMvcTest, integration test the full flow with @SpringBootTest.",
              "tags": ["webmvctest", "mockbean", "controller-testing"],
              "difficulty": "intermediate"
            },
            {
              "id": "test-017",
              "question": "What is @DataJpaTest and when do you use it?",
              "answer": "@DataJpaTest: Loads only the JPA layer — entities, repositories, JPA configuration. In-memory database (H2) is used by default. @Service and @Component beans are NOT loaded.\n\nIncludes: TestEntityManager (a wrapper over EntityManager for test helpers like persistFlushFind). Transactional by default — each test rolls back.\n\nUse cases: Testing custom @Query methods, Specification logic, entity relationships, cascade behaviors.\n\nCustomize database: @DataJpaTest + @AutoConfigureTestDatabase(replace = NONE) uses the real DB. Add @Testcontainers to spin up a real PostgreSQL/MySQL container.\n\nCommon mistake: Don't use @DataJpaTest if your repository has custom beans in the @Service layer — use @SpringBootTest for that.",
              "tags": ["datajpatest", "repository-testing", "testentitymanager"],
              "difficulty": "intermediate"
            },
            {
              "id": "test-018",
              "question": "What is @MockBean vs @SpyBean in Spring Boot tests?",
              "answer": "@MockBean: Creates a Mockito mock and registers it as a Spring bean in the ApplicationContext, replacing any existing bean of that type. All method calls return null/empty by default. Use when you want to fully stub a dependency.\n\n@SpyBean: Creates a Mockito spy (partial mock) wrapping the real bean. Real methods are called by default; you can selectively stub methods. Use when you want to verify real behavior but stub one specific method.\n\nKey difference from @Mock: @Mock only creates a Mockito object — it is NOT added to the Spring context. Use @Mock with @ExtendWith(MockitoExtension.class) for pure unit tests without Spring context.",
              "tags": ["mockbean", "spybean", "mockito"],
              "difficulty": "intermediate"
            }
          ]
        },
        {
          "id": "spring-security",
          "title": "Spring Security",
          "weight": 12,
          "cards": [
            {
              "id": "sec-001",
              "question": "What are the two core concepts of Spring Security?",
              "answer": "Authentication — who are you? Verifies identity via credentials (username/password, token). Stores result in SecurityContext as Authentication object. Authorization — what can you do? Checks whether the authenticated principal has permission to access a resource or method. Enforced via AccessDecisionManager.",
              "tags": ["authentication", "authorization", "security"],
              "difficulty": "beginner"
            },
            {
              "id": "sec-002",
              "question": "How do you configure Spring Security (modern approach)?",
              "answer": "Define a @Bean of type SecurityFilterChain using HttpSecurity in a @Configuration class. Example: http.authorizeHttpRequests(auth -> auth.requestMatchers('/public/**').permitAll().anyRequest().authenticated()).formLogin(Customizer.withDefaults()). The old WebSecurityConfigurerAdapter approach is deprecated.",
              "tags": ["securityfilterchain", "httpsecurity", "configuration"],
              "difficulty": "intermediate"
            },
            {
              "id": "sec-003",
              "question": "What is UserDetailsService?",
              "answer": "UserDetailsService is an interface with one method: loadUserByUsername(String username) — returns a UserDetails object with username, password (encoded), and authorities/roles. Spring Security calls it during authentication. Implement it to load users from a database.",
              "tags": ["userdetailsservice", "userdetails", "authentication"],
              "difficulty": "beginner"
            },
            {
              "id": "sec-004",
              "question": "What is UserDetails?",
              "answer": "UserDetails is an interface representing a user principal with: getUsername(), getPassword() (must be encoded), getAuthorities() (roles/permissions), isAccountNonExpired(), isAccountNonLocked(), isCredentialsNonExpired(), isEnabled(). Spring's User class provides a ready implementation.",
              "tags": ["userdetails", "user", "authorities"],
              "difficulty": "beginner"
            },
            {
              "id": "sec-005",
              "question": "What is PasswordEncoder and which implementation is recommended?",
              "answer": "PasswordEncoder encodes and verifies passwords. Recommended: BCryptPasswordEncoder — uses BCrypt hashing with a random salt, making brute-force attacks extremely slow. Never store plain text passwords. Always encode on save and use matches() to verify — never decode. Also available: Argon2, PBKDF2, SCrypt.",
              "tags": ["passwordencoder", "bcrypt", "security"],
              "difficulty": "beginner"
            },
            {
              "id": "sec-006",
              "question": "How do you enable method-level security?",
              "answer": "Add @EnableMethodSecurity (Spring Security 5.6+) or @EnableGlobalMethodSecurity(prePostEnabled=true) (older) to a @Configuration class. Then use: @PreAuthorize (before method — access arguments), @PostAuthorize (after method — access return value), @Secured(['ROLE_ADMIN']), @RolesAllowed.",
              "tags": ["enablemethodsecurity", "preauthorize", "method-security"],
              "difficulty": "intermediate"
            },
            {
              "id": "sec-007",
              "question": "What is @PreAuthorize vs @PostAuthorize?",
              "answer": "@PreAuthorize is evaluated before the method runs — blocks execution if false. Example: @PreAuthorize('hasRole(\"ADMIN\") or #userId == authentication.principal.id'). @PostAuthorize is evaluated after — can check the return value using #returnObject. Example: @PostAuthorize('#returnObject.owner == authentication.name').",
              "tags": ["preauthorize", "postauthorize", "spel"],
              "difficulty": "intermediate"
            },
            {
              "id": "sec-008",
              "question": "What is CSRF and how does Spring Security handle it?",
              "answer": "CSRF (Cross-Site Request Forgery) tricks an authenticated user's browser into sending unwanted requests to your app. Spring Security adds CSRF token validation by default for state-changing operations (POST/PUT/DELETE). For stateless REST APIs with JWT, disable it: http.csrf(csrf -> csrf.disable()).",
              "tags": ["csrf", "security", "rest"],
              "difficulty": "intermediate"
            },
            {
              "id": "sec-009",
              "question": "What is the Spring Security filter chain?",
              "answer": "Spring Security is implemented as a chain of servlet filters applied to every request. Key filters in order: SecurityContextPersistenceFilter → UsernamePasswordAuthenticationFilter → BasicAuthenticationFilter → ExceptionTranslationFilter → FilterSecurityInterceptor (authorization). Each filter can short-circuit the chain.",
              "tags": ["filterchain", "filter", "security"],
              "difficulty": "advanced"
            },
            {
              "id": "sec-010",
              "question": "What is the SecurityContext and SecurityContextHolder?",
              "answer": "SecurityContext stores the Authentication object for the current request. SecurityContextHolder provides static access to it via SecurityContextHolder.getContext().getAuthentication(). By default uses ThreadLocal strategy — the Authentication is tied to the current thread and cleared after the request.",
              "tags": ["securitycontext", "securitycontextholder", "authentication"],
              "difficulty": "intermediate"
            },
            {
              "id": "sec-011",
              "question": "How do you restrict access to URLs in Spring Security?",
              "answer": "Using HttpSecurity.authorizeHttpRequests(): requestMatchers('/admin/**').hasRole('ADMIN'), requestMatchers('/api/**').authenticated(), requestMatchers('/public/**').permitAll(). Order matters — more specific rules first. anyRequest().authenticated() should be last as the catch-all.",
              "tags": ["authorization", "urls", "requestmatchers"],
              "difficulty": "intermediate"
            },
            {
              "id": "sec-012",
              "question": "What is the difference between hasRole() and hasAuthority()?",
              "answer": "hasRole('ADMIN') automatically prefixes 'ROLE_' — checks for authority 'ROLE_ADMIN'. hasAuthority('ROLE_ADMIN') checks for the exact string. When using UserDetails.getAuthorities(), store as 'ROLE_ADMIN' for hasRole() to work. Use hasAuthority() for fine-grained permissions without the ROLE_ prefix.",
              "tags": ["hasrole", "hasauthority", "role"],
              "difficulty": "intermediate"
            },
            {
              "id": "sec-013",
              "question": "What are DelegatingFilterProxy and FilterChainProxy in Spring Security?",
              "answer": "DelegatingFilterProxy is a standard Servlet Filter registered in the servlet container that delegates all request matching and processing to FilterChainProxy. FilterChainProxy is a Spring-managed bean that contains the SecurityFilterChain (a list of security filters). This bridge connects the Servlet container lifecycle with Spring's IoC container.",
              "tags": ["delegatingfilterproxy", "filterchainproxy", "architecture"],
              "difficulty": "advanced"
            },
            {
              "id": "sec-014",
              "question": "What is DelegatingPasswordEncoder and how does it secure passwords?",
              "answer": "DelegatingPasswordEncoder is the default encoder in Spring Security. It prefixes stored passwords with an identifier indicating the hashing algorithm used, e.g., {bcrypt}$2a$10... This allows the application to support multiple legacy or modern password formats, perform automatic upgrades, and change default hashing algorithms transparently.",
              "tags": ["passwordencoder", "delegatingpasswordencoder", "security"],
              "difficulty": "intermediate"
            },
            {
              "id": "sec-015",
              "question": "How do you access the authenticated user's details inside a Spring Controller?",
              "answer": "(1) Inject the Authentication object directly into the controller method signature and call getPrincipal(). (2) Use the SecurityContextHolder: SecurityContextHolder.getContext().getAuthentication().getPrincipal(). (3) Inject the specific principal using the @AuthenticationPrincipal annotation (e.g. @AuthenticationPrincipal UserDetails user).",
              "tags": ["authenticationprincipal", "securitycontextholder", "principal"],
              "difficulty": "intermediate"
            },
            {
              "id": "sec-016",
              "question": "How do you configure JWT authentication in Spring Security?",
              "answer": "JWT (JSON Web Token) flow:\n1. User logs in → server validates credentials → server creates a signed JWT (header.payload.signature) → returns it to client.\n2. Client stores JWT (localStorage or httpOnly cookie). Sends it in Authorization: Bearer <token> header on each request.\n3. Server-side filter (OncePerRequestFilter subclass) extracts token from header → validates signature using secret key → creates a UsernamePasswordAuthenticationToken → sets it on SecurityContextHolder.\n\nSpring Security config: Disable sessions (SessionCreationPolicy.STATELESS). Add custom JwtAuthFilter before UsernamePasswordAuthenticationFilter.\n\nLibraries: io.jsonwebtoken (jjwt), com.auth0.java-jwt, Spring Security OAuth2 Resource Server (oauth2ResourceServer().jwt() — handles all of this automatically).\n\nNever store sensitive data in JWT payload — it is Base64-encoded, not encrypted.",
              "tags": ["jwt", "bearer-token", "stateless"],
              "difficulty": "advanced"
            },
            {
              "id": "sec-017",
              "question": "How do you configure CORS in Spring Security?",
              "answer": "CORS (Cross-Origin Resource Sharing) must be configured before Spring Security processes the request, otherwise preflight OPTIONS requests get blocked.\n\nOption 1 — Spring MVC @CrossOrigin on controller/method:\n@CrossOrigin(origins = 'https://myapp.com')\n\nOption 2 — Global MVC CORS config (WebMvcConfigurer addCorsMappings)\n\nOption 3 (recommended with Security):\nhttp.cors(cors -> cors.configurationSource(request -> {\n    CorsConfiguration config = new CorsConfiguration();\n    config.setAllowedOrigins(List.of('https://myapp.com'));\n    config.setAllowedMethods(List.of('GET','POST','PUT','DELETE'));\n    config.setAllowedHeaders(List.of('*'));\n    return config;\n}));\n\nKey point: Never use allowedOrigins('*') with allowCredentials(true) — browsers block this. Use allowedOriginPatterns instead.",
              "tags": ["cors", "cross-origin", "security"],
              "difficulty": "intermediate"
            },
            {
              "id": "sec-018",
              "question": "What is CSRF and when should you disable CSRF protection in Spring Security?",
              "answer": "CSRF (Cross-Site Request Forgery): An attack where a malicious site tricks the authenticated user's browser into making an unwanted request to your site (using the user's session cookie).\n\nSpring Security's defense: CSRF tokens. Server generates a unique token per session. Every state-changing request (POST/PUT/DELETE) must include this token. Browsers cannot forge it from other origins.\n\nWhen to disable CSRF: For stateless REST APIs using JWT Bearer tokens — not cookies. Since there's no session cookie, CSRF attacks can't exploit the auth mechanism.\ndisable: http.csrf(AbstractHttpConfigurer::disable)\n\nWhen to KEEP CSRF enabled: Traditional web apps with server-side rendered forms (Thymeleaf auto-includes CSRF tokens), or any cookie-based authentication.",
              "tags": ["csrf", "security", "stateless"],
              "difficulty": "intermediate"
            },
            {
              "id": "sec-019",
              "question": "What is OAuth2 and how does Spring Security support it as a Resource Server?",
              "answer": "OAuth2: An authorization framework allowing third-party apps to access user resources without sharing credentials.\n\nKey roles: Resource Owner (user), Client (your app), Authorization Server (Google, Okta, Keycloak — issues tokens), Resource Server (your API — validates tokens).\n\nFlows: Authorization Code (web apps with redirect), Client Credentials (machine-to-machine), PKCE (mobile/SPA apps).\n\nSpring Security Resource Server (spring-boot-starter-oauth2-resource-server):\n1. Add dependency and configure issuer-uri or jwk-set-uri.\n2. Tokens validated automatically on every request.\n3. Claims mapped to Spring Security authorities.\n\napplication.properties:\nspring.security.oauth2.resourceserver.jwt.issuer-uri=https://auth.myapp.com\n\nIn SecurityFilterChain: http.oauth2ResourceServer(rs -> rs.jwt(Customizer.withDefaults()));",
              "tags": ["oauth2", "resource-server", "authorization"],
              "difficulty": "advanced"
            }
          ]
        },
        {
          "id": "spring-boot",
          "title": "Spring Boot",
          "weight": 18,
          "cards": [
            {
              "id": "sb-001",
              "question": "What does @SpringBootApplication do?",
              "answer": "@SpringBootApplication is a meta-annotation combining: @Configuration (marks as config class), @EnableAutoConfiguration (enables auto-config), @ComponentScan (scans package of main class and sub-packages). It bootstraps the entire Spring Boot application. Place it on the main class with the main() method.",
              "tags": ["springbootapplication", "autoconfiguration", "bootstrap"],
              "difficulty": "beginner"
            },
            {
              "id": "sb-002",
              "question": "What is Spring Boot auto-configuration and how does it work?",
              "answer": "Auto-configuration automatically configures beans based on classpath contents and existing beans. Works via @Conditional annotations on configuration classes in spring.factories (or META-INF/spring/auto-configuration.imports in Boot 3). E.g. if Jackson is on classpath, ObjectMapper is auto-configured. Check what was auto-configured with --debug flag.",
              "tags": ["autoconfiguration", "conditional", "springfactories"],
              "difficulty": "intermediate"
            },
            {
              "id": "sb-003",
              "question": "How do you exclude a specific auto-configuration class?",
              "answer": "@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class}) — compile-time safe. Or spring.autoconfigure.exclude=org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration in application.properties. Useful when auto-config conflicts with your manual configuration.",
              "tags": ["autoconfiguration", "exclude", "springbootapplication"],
              "difficulty": "intermediate"
            },
            {
              "id": "sb-004",
              "question": "What is application.properties vs application.yml?",
              "answer": "Both configure Spring Boot. application.properties uses key=value syntax. application.yml uses YAML indentation hierarchy (better for nested configs). Same keys, different syntax. Boot loads application.properties first, then profile-specific (application-dev.properties). YAML supports lists and maps more naturally.",
              "tags": ["properties", "yml", "configuration"],
              "difficulty": "beginner"
            },
            {
              "id": "sb-005",
              "question": "What is @ConfigurationProperties?",
              "answer": "@ConfigurationProperties(prefix='app.mail') binds a group of related properties to a typed Java class. Add @EnableConfigurationProperties or @Component on the class. Supports nested objects, lists, validation with @Valid. Better than @Value for groups of related properties — type-safe and IDE-friendly.",
              "tags": ["configurationproperties", "properties", "binding"],
              "difficulty": "intermediate"
            },
            {
              "id": "sb-006",
              "question": "What is Spring Boot Actuator?",
              "answer": "Actuator provides production-ready monitoring endpoints: /actuator/health (health status), /actuator/metrics (app metrics), /actuator/info (app info), /actuator/env (environment), /actuator/beans (all beans), /actuator/mappings (URL mappings). Enable via spring-boot-starter-actuator. Secure in production.",
              "tags": ["actuator", "health", "metrics", "monitoring"],
              "difficulty": "beginner"
            },
            {
              "id": "sb-007",
              "question": "How do you expose and secure Actuator endpoints?",
              "answer": "management.endpoints.web.exposure.include=health,metrics,info — expose specific endpoints. management.endpoints.web.exposure.include=* — expose all (not for production). Secure with Spring Security by adding rules for /actuator/** paths. management.endpoint.health.show-details=always to show full health details.",
              "tags": ["actuator", "security", "expose"],
              "difficulty": "intermediate"
            },
            {
              "id": "sb-008",
              "question": "What is a custom HealthIndicator?",
              "answer": "Implement HealthIndicator interface with health() method returning Health.up().withDetail('key','value').build() or Health.down().withDetail('error', ex.getMessage()).build(). Name the bean customHealth — endpoint shows as /actuator/health/custom. Auto-detected by Spring Boot.",
              "tags": ["healthindicator", "actuator", "custom"],
              "difficulty": "intermediate"
            },
            {
              "id": "sb-009",
              "question": "What are Spring Boot starters?",
              "answer": "Starters are dependency descriptors that pull in all needed dependencies for a feature. spring-boot-starter-web adds Spring MVC + embedded Tomcat + Jackson. spring-boot-starter-data-jpa adds JPA + Hibernate + spring-data-jpa. spring-boot-starter-security adds Spring Security. spring-boot-starter-test adds JUnit 5 + Mockito + AssertJ.",
              "tags": ["starters", "dependencies", "pom"],
              "difficulty": "beginner"
            },
            {
              "id": "sb-010",
              "question": "What is CommandLineRunner and ApplicationRunner?",
              "answer": "Both execute code after the Spring context is fully initialized. CommandLineRunner.run(String... args) receives raw command-line args as a String array. ApplicationRunner.run(ApplicationArguments args) receives parsed args object with option names and values. Annotate with @Order to control execution order when multiple exist.",
              "tags": ["commandlinerunner", "applicationrunner", "startup"],
              "difficulty": "intermediate"
            },
            {
              "id": "sb-011",
              "question": "How does Spring Boot's embedded server work?",
              "answer": "Spring Boot packages an embedded Tomcat (default), Jetty, or Undertow inside the JAR. The app runs as a standalone executable JAR via java -jar app.jar. No external server installation needed. Switch server by excluding spring-boot-starter-tomcat and adding spring-boot-starter-jetty.",
              "tags": ["embedded-server", "tomcat", "jar"],
              "difficulty": "beginner"
            },
            {
              "id": "sb-012",
              "question": "What are @ConditionalOnClass, @ConditionalOnMissingBean, @ConditionalOnProperty?",
              "answer": "@ConditionalOnClass(Jackson2ObjectMapperBuilder.class) — register bean only if class is on classpath. @ConditionalOnMissingBean(ObjectMapper.class) — register only if no existing bean of that type (lets users override). @ConditionalOnProperty(name='feature.enabled', havingValue='true') — register based on property value. Core of auto-configuration.",
              "tags": ["conditional", "autoconfiguration", "conditional-bean"],
              "difficulty": "intermediate"
            },
            {
              "id": "sb-013",
              "question": "What is Spring Boot's property source priority order?",
              "answer": "Highest to lowest priority: (1) Command-line args, (2) JNDI attributes, (3) Java system properties (-D), (4) OS env variables, (5) Profile-specific application-{profile}.properties, (6) application.properties/yml, (7) @PropertySource, (8) Default properties. Command-line args always win.",
              "tags": ["properties", "priority", "override"],
              "difficulty": "advanced"
            },
            {
              "id": "sb-014",
              "question": "What is spring.profiles.active and how do you use Spring profiles?",
              "answer": "spring.profiles.active=prod activates profiles. Profile-specific files (application-prod.properties) are loaded and override defaults. Beans annotated @Profile('prod') load only when prod is active. Activate via properties file, JVM arg (-Dspring.profiles.active=prod), or environment variable (SPRING_PROFILES_ACTIVE=prod).",
              "tags": ["profiles", "active", "environment"],
              "difficulty": "beginner"
            },
            {
              "id": "sb-015",
              "question": "What is Spring Boot DevTools?",
              "answer": "spring-boot-devtools enables: automatic restart when classpath files change, LiveReload browser refresh, property overrides for development (e.g. disabling caches), and H2 console. Only active in development — excluded from production JAR automatically.",
              "tags": ["devtools", "restart", "development"],
              "difficulty": "beginner"
            },
            {
              "id": "sb-016",
              "question": "How did Spring Boot 3 change the declaration of custom auto-configurations compared to Spring Boot 2?",
              "answer": "In Spring Boot 2, custom auto-configurations were declared in META-INF/spring.factories under EnableAutoConfiguration. In Spring Boot 3, this file is deprecated for auto-configurations. Instead, they must be registered in a file named META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports, with each class on a new line.",
              "tags": ["springboot3", "autoconfiguration", "imports"],
              "difficulty": "advanced"
            },
            {
              "id": "sb-017",
              "question": "How is logging customized in Spring Boot, and how can it be profile-specific?",
              "answer": "Spring Boot uses Logback by default. You can customize it by adding a logback-spring.xml file in the classpath. Spring Boot extends standard logback configuration by adding the <springProfile name='dev'> tag, allowing you to define different log levels, patterns, or appenders depending on the active Spring profile.",
              "tags": ["logging", "logback", "profiles"],
              "difficulty": "intermediate"
            },
            {
              "id": "sb-018",
              "question": "How do you implement a custom @Conditional annotation in Spring Boot?",
              "answer": "Create a custom annotation and annotate it with @Conditional(MyCondition.class). Implement the Condition interface in MyCondition and override the matches(ConditionContext context, AnnotatedTypeMetadata metadata) method, returning true if the bean should be created or false otherwise.",
              "tags": ["conditional", "configuration", "condition"],
              "difficulty": "advanced"
            },
            {
              "id": "sb-019",
              "question": "What is Spring Boot Actuator and what endpoints does it expose?",
              "answer": "Spring Boot Actuator provides production-ready monitoring and management endpoints.\n\nKey endpoints (HTTP or JMX):\n- /actuator/health — app health status (UP/DOWN). Includes DB, disk, custom health indicators.\n- /actuator/metrics — application metrics (JVM memory, GC, HTTP request counts). Integrates with Micrometer → Prometheus.\n- /actuator/info — application build/git info.\n- /actuator/env — environment properties (masked by default).\n- /actuator/loggers — view/change log levels at runtime.\n- /actuator/threaddump — JVM thread dump.\n- /actuator/heapdump — JVM heap dump.\n- /actuator/beans — all Spring beans.\n- /actuator/conditions — auto-configuration report.\n\nSecurity: By default only /health and /info are exposed over HTTP. Enable all: management.endpoints.web.exposure.include=*. Always secure actuator endpoints in production.",
              "tags": ["actuator", "monitoring", "health", "metrics"],
              "difficulty": "intermediate"
            },
            {
              "id": "sb-020",
              "question": "What is Spring Boot's support for GraalVM Native Image compilation?",
              "answer": "GraalVM Native Image compiles Spring Boot apps ahead-of-time (AOT) into native executables. Results in near-instant startup (< 100ms) and much lower memory consumption.\n\nSpring Boot 3 AOT processing: At build time, Spring analyzes the ApplicationContext, generates code for bean definitions, removes reflection where possible, and produces hints for GraalVM's native-image tool.\n\nBuild: mvn spring-boot:build-image -Pnative (uses Cloud Native Buildpacks and GraalVM) or mvn native:compile (GraalVM native-image directly).\n\nLimitations: Reflection must be explicitly declared. Dynamic proxies need hints. Third-party libraries may need compatibility. Long build times (2-10 min).\n\nUse case: Functions-as-a-Service (AWS Lambda, Google Cloud Functions) where cold start time is critical.",
              "tags": ["graalvm", "native-image", "aot"],
              "difficulty": "advanced"
            },
            {
              "id": "sb-021",
              "question": "How does Spring Boot handle externalized configuration and what is the property source priority order?",
              "answer": "Spring Boot's property source order (highest to lowest priority):\n1. Command-line arguments (--server.port=9090)\n2. SPRING_APPLICATION_JSON (inline JSON via env var or system prop)\n3. @TestPropertySource (in tests)\n4. OS environment variables (SPRING_DATASOURCE_URL)\n5. application-{profile}.properties inside jar\n6. application.properties inside jar\n7. @PropertySource on @Configuration classes\n8. Default properties (SpringApplication.setDefaultProperties)\n\nProfile-specific files override the base application.properties.\n\nWith @ConfigurationProperties(prefix='app'): A type-safe way to bind a group of related properties to a POJO. Supports relaxed binding (app.myUrl, APP_MY_URL, app-my-url all bind to myUrl). Enable with @EnableConfigurationProperties or @ConfigurationPropertiesScan.",
              "tags": ["configuration", "properties", "profile", "configurationproperties"],
              "difficulty": "intermediate"
            }
          ]
        }
      ]
    },
    {
      "id": "java21-dev",
      "title": "Java 21 Developer",
      "vendor": "Oracle",
      "exam_code": "1Z0-830",
      "color": "#F8981D",
      "icon": "☕",
      "status": "planned",
      "target_date": "2026-06-01",
      "pass_score": 68,
      "total_questions": 50,
      "time_minutes": 90,
      "topics": []
    },
    {
      "id": "aws-saa",
      "title": "AWS Solutions Architect",
      "vendor": "Amazon",
      "exam_code": "SAA-C03",
      "color": "#FF9900",
      "icon": "☁️",
      "status": "planned",
      "target_date": "2026-12-01",
      "pass_score": 72,
      "total_questions": 65,
      "time_minutes": 130,
      "topics": []
    },
    {
      "id": "system-design",
      "title": "System Design Interview",
      "vendor": "Interview Prep",
      "exam_code": "SD-MASTER",
      "color": "#8B5CF6",
      "icon": "🏗️",
      "status": "active",
      "target_date": "2026-09-01",
      "pass_score": 80,
      "total_questions": 100,
      "time_minutes": 45,
      "topics": [
        {
          "id": "sd-fundamentals",
          "title": "Core Fundamentals & Concepts",
          "weight": 15,
          "cards": [
            {
              "id": "sd-f-001",
              "question": "What is the difference between Horizontal Scaling and Vertical Scaling?",
              "answer": "Vertical Scaling (Scale Up): Add more power (CPU, RAM, SSD) to an existing machine. Simple but has an upper hardware limit and creates a single point of failure.\n\nHorizontal Scaling (Scale Out): Add more machines to a pool. More complex (requires load balancing, distributed state management) but offers near-unlimited capacity and better fault tolerance.\n\nMost modern systems prefer horizontal scaling. Example: SQL databases traditionally scale vertically; Cassandra and DynamoDB scale horizontally.",
              "tags": ["scaling", "fundamentals", "architecture"],
              "difficulty": "beginner"
            },
            {
              "id": "sd-f-002",
              "question": "Explain the CAP Theorem and give real-world examples of each category.",
              "answer": "CAP Theorem: A distributed system can guarantee only 2 of 3 properties simultaneously.\n\nC (Consistency): Every read receives the most recent write.\nA (Availability): Every request receives a response (not necessarily latest data).\nP (Partition Tolerance): System continues despite network splits.\n\nCA Systems: Traditional RDBMS (MySQL, PostgreSQL).\nCP Systems: MongoDB, HBase, ZooKeeper — choose consistency over availability during partition.\nAP Systems: Cassandra, DynamoDB, CouchDB — choose availability, eventually consistent.\n\nKey insight: In practice, network partitions always happen, so you must choose between CP or AP.",
              "tags": ["cap-theorem", "distributed-systems", "consistency"],
              "difficulty": "intermediate"
            },
            {
              "id": "sd-f-003",
              "question": "What is the difference between Latency, Throughput, and Bandwidth?",
              "answer": "Latency: Time for a single request to travel from source to destination and back. Measured in ms. Goal: minimize. P50/P99/P999 percentiles are critical.\n\nThroughput: Number of requests a system can handle per unit time (req/sec or TPS). Goal: maximize.\n\nBandwidth: Maximum data transfer capacity of a network link (bits/sec).\n\nAnalogy: Bandwidth = pipe diameter, Throughput = actual water flow, Latency = time for a water drop to travel.\n\nRule of thumb: Improving throughput can increase latency under high load.",
              "tags": ["latency", "throughput", "performance"],
              "difficulty": "beginner"
            },
            {
              "id": "sd-f-004",
              "question": "What is Availability and how do you express it in 'nines'?",
              "answer": "Availability = (Uptime / (Uptime + Downtime)) * 100%\n\n99% (2 nines) = 87.6 hours downtime/year\n99.9% (3 nines) = 8.76 hours downtime/year\n99.99% (4 nines) = 52.56 minutes downtime/year\n99.999% (5 nines) = 5.26 minutes downtime/year\n\nHow to achieve: Eliminate single points of failure (SPOF), use replication and redundancy, implement health checks and auto-healing, use circuit breakers, and design for graceful degradation.\n\nSLA = contractual uptime commitment; SLO = internal target; SLI = actual measured metric.",
              "tags": ["availability", "sla", "reliability"],
              "difficulty": "beginner"
            },
            {
              "id": "sd-f-005",
              "question": "What is a Single Point of Failure (SPOF) and how do you eliminate it?",
              "answer": "A SPOF is any component whose failure brings down the entire system. Examples: single database server, single load balancer, single DNS server.\n\nElimination strategies:\n1. Redundancy: Run multiple instances (active-active or active-passive).\n2. Replication: Replicate data across multiple nodes.\n3. Health checks + auto-recovery: Replace unhealthy nodes automatically.\n4. Geographic distribution: Deploy across multiple data centers/AZs.\n5. Circuit breakers: Prevent cascade failures.\n\nEven 'redundant' systems can have hidden SPOFs — check shared power supplies, network switches, and shared databases.",
              "tags": ["spof", "reliability", "redundancy"],
              "difficulty": "intermediate"
            },
            {
              "id": "sd-f-006",
              "question": "Explain Strong, Eventual, and Causal Consistency models.",
              "answer": "Strong Consistency: Every read reflects the latest write. All nodes agree on state at all times. Best for financial transactions. Higher latency. (e.g., RDBMS with transactions, ZooKeeper).\n\nEventual Consistency: Replicas converge to the same state eventually. Reads may be stale temporarily. Better availability and performance. (e.g., Cassandra, DynamoDB, DNS).\n\nCausal Consistency: Reads respect causal dependencies — if you write A then B, no one sees B without A. Middle ground. (e.g., MongoDB causally consistent sessions).\n\nRead-Your-Writes: A user always sees their own writes, even if other users might not yet.",
              "tags": ["consistency", "eventual-consistency", "distributed-systems"],
              "difficulty": "intermediate"
            },
            {
              "id": "sd-f-007",
              "question": "What is Back-of-the-Envelope estimation? Give an example for Twitter.",
              "answer": "Quick rough calculations to validate system feasibility before designing.\n\nKey figures to memorize:\n- Storage: 1KB=10^3B, 1MB=10^6B, 1GB=10^9B, 1TB=10^12B\n- Time: 1 day = 86,400 sec ≈ 100K sec\n- Network: SSD ~500MB/s, RAM ~10GB/s, Network ~1GB/s\n\nTwitter example:\n- 300M users, 50% DAU = 150M active users\n- 5 tweets/day per user = 750M tweets/day ≈ 8,700 TPS\n- Tweet = 280 chars = 280 bytes\n- Daily storage: 750M × 280B = 210GB/day\n- 3 years text only: ~230TB",
              "tags": ["estimation", "capacity-planning", "interview"],
              "difficulty": "intermediate"
            },
            {
              "id": "sd-f-008",
              "question": "What is a Rate Limiter and what algorithms are used to implement it?",
              "answer": "Rate Limiter controls the rate of requests from a client/API to prevent abuse, DoS, and ensure fair usage.\n\nAlgorithms:\n1. Token Bucket: Tokens added at fixed rate. Request consumes a token. Burst-friendly. Most common (used by AWS, Stripe).\n2. Leaky Bucket: Requests queued and processed at constant rate. Smooths bursts. Good for stable outbound rate.\n3. Fixed Window Counter: Count requests per fixed window (e.g., 1 min). Simple but has boundary burst problem.\n4. Sliding Window Log: Track timestamps of all requests. Accurate but memory-intensive.\n5. Sliding Window Counter: Hybrid approach. Efficient and accurate.\n\nWhere to store counters: Redis (with INCR + EXPIRE commands) is the standard choice for distributed rate limiting.",
              "tags": ["rate-limiting", "algorithms", "api"],
              "difficulty": "intermediate"
            }
          ]
        },
        {
          "id": "sd-databases",
          "title": "Databases: SQL, NoSQL & Storage",
          "weight": 20,
          "cards": [
            {
              "id": "sd-db-001",
              "question": "When would you choose SQL over NoSQL and vice versa?",
              "answer": "Choose SQL (Relational) when: You need ACID transactions, complex JOINs, strong consistency, structured schema (banking, ERP, e-commerce orders). Examples: PostgreSQL, MySQL, Oracle.\n\nChoose NoSQL when: Schema is flexible/evolving, horizontal scale is required, high write throughput needed, data is hierarchical or document-like.\n\nTypes of NoSQL:\n- Document: MongoDB, Firestore (profiles, catalogs)\n- Key-Value: Redis, DynamoDB (sessions, caching, leaderboards)\n- Wide Column: Cassandra, HBase (time-series, IoT, write-heavy)\n- Graph: Neo4j (social graphs, fraud detection)\n\nCommon pattern: PostgreSQL (source of truth) + Redis (caching) + Elasticsearch (search).",
              "tags": ["sql", "nosql", "database-selection"],
              "difficulty": "beginner"
            },
            {
              "id": "sd-db-002",
              "question": "What is Database Sharding and what are the common sharding strategies?",
              "answer": "Sharding (Horizontal Partitioning): Splitting a large database table across multiple database instances (shards) to distribute load and storage.\n\nStrategies:\n1. Range-Based: Shard by value range (userId 1-1M on Shard1). Simple, supports range queries. Risk: hotspots if data is skewed.\n2. Hash-Based: Apply hash function to shard key (userId % N). Uniform distribution. Bad for range queries. Resharding is hard.\n3. Directory-Based: A lookup service maps keys to shards. Very flexible but lookup service is a SPOF.\n4. Geo-Based: Shard by user location. Good for latency and data compliance.\n\nChallenges: Cross-shard JOINs and transactions are difficult. Choose shard key with high cardinality and uniform distribution.",
              "tags": ["sharding", "partitioning", "database-scaling"],
              "difficulty": "intermediate"
            },
            {
              "id": "sd-db-003",
              "question": "Explain Database Replication: Primary-Replica, Multi-Primary, and trade-offs.",
              "answer": "Primary-Replica (Leader-Follower): All writes go to Primary. Replicas receive replicated changes asynchronously. Reads distributed to replicas (read scaling). Trade-off: replica lag — reads from replicas may be stale.\n\nMulti-Primary (Multi-Leader): Multiple nodes accept writes. Good for multi-datacenter writes. Complex conflict resolution required. Suitable for offline-first apps.\n\nLeaderless (Quorum): No single leader. Client writes to N nodes. Read from R nodes. Write acknowledged when W nodes confirm. W + R > N ensures consistency. Used by Cassandra, DynamoDB.\n\nCommon pattern: Use synchronous replication for the first replica (RPO=0), asynchronous for the rest.",
              "tags": ["replication", "primary-replica", "quorum"],
              "difficulty": "intermediate"
            },
            {
              "id": "sd-db-004",
              "question": "What are Database Indexes? Explain B-Tree vs Hash indexes.",
              "answer": "An index is a data structure that speeds up data retrieval at the cost of additional storage and slower writes.\n\nB-Tree Index (Default): Balanced tree. Supports equality (=), range queries (<, >, BETWEEN), prefix search (LIKE 'abc%'), ORDER BY. O(log n) lookup. Used by most RDBMS and MongoDB.\n\nHash Index: Maps key to hash bucket. O(1) for equality lookups. Does NOT support range queries. Best for exact-match lookups.\n\nOther types:\n- Composite index: Multiple columns (column order matters)\n- Covering index: Includes all needed columns — avoids table lookup\n- Full-text index: For text search (GIN in PostgreSQL)\n- Geospatial index: For location queries (PostGIS)",
              "tags": ["indexes", "b-tree", "performance"],
              "difficulty": "intermediate"
            },
            {
              "id": "sd-db-005",
              "question": "What is ACID and BASE? How do they apply to distributed systems?",
              "answer": "ACID (Relational Databases):\n- Atomicity: All-or-nothing transactions\n- Consistency: Data always valid per rules\n- Isolation: Concurrent transactions don't interfere\n- Durability: Committed data persists after crashes\n\nBASE (NoSQL / Distributed):\n- Basically Available: System available even during failure\n- Soft State: State may change without input due to eventual consistency\n- Eventually Consistent: System converges to consistency over time\n\nIn distributed systems: Full ACID across shards requires distributed transactions (2PC, Saga) which are complex and expensive. Modern systems like CockroachDB and Google Spanner achieve distributed ACID using MVCC + Raft consensus, but at higher latency.",
              "tags": ["acid", "base", "transactions"],
              "difficulty": "intermediate"
            },
            {
              "id": "sd-db-006",
              "question": "What is the N+1 Query Problem and how do you solve it in system design?",
              "answer": "N+1 Problem: Fetching 1 list then making N additional queries for related data. Example: Fetch 100 users, then for each user fetch their profile = 101 queries.\n\nApplication-level solutions: Eager loading/JOINs, batch loading (DataLoader pattern in GraphQL), in-memory lookup tables.\n\nSystem design solutions:\n1. Denormalization: Store frequently accessed related data together. Example: Store author name directly in post document, avoiding a JOIN. Trade-off: write complexity and data inconsistency risk.\n2. Precomputed aggregates: Compute counts and summaries at write time. Example: Store follower_count in user table, update on follow/unfollow.\n3. Caching: Cache frequently read data to avoid repeated DB hits.",
              "tags": ["n+1", "query-optimization", "denormalization"],
              "difficulty": "intermediate"
            },
            {
              "id": "sd-db-007",
              "question": "What is a Time-Series Database and when should you use it?",
              "answer": "A Time-Series Database (TSDB) is optimized for storing and querying data indexed by time. Data is typically append-only and monotonically increasing.\n\nUse cases: Metrics & monitoring (CPU, memory, request rates), IoT sensor data, financial tick data, application logs.\n\nExamples: InfluxDB (purpose-built TSDB), TimescaleDB (PostgreSQL extension), Apache Cassandra (excellent for time-series), Prometheus (monitoring-specific).\n\nKey optimizations:\n- Columnar storage: compress time and value columns separately\n- Automatic downsampling: aggregate old data at coarser granularity\n- TTL-based expiry: auto-delete old data\n\nAvoid: Generic RDBMS for high-frequency time-series — it doesn't scale well.",
              "tags": ["time-series", "influxdb", "monitoring"],
              "difficulty": "intermediate"
            },
            {
              "id": "sd-db-008",
              "question": "Explain Write-Ahead Log (WAL) and why it's critical for database durability.",
              "answer": "WAL: Before any change is applied to the actual data file, it is first written to an append-only log file. On crash, the database replays the WAL to recover committed transactions.\n\nWhy append-only? Sequential writes to disk are orders of magnitude faster than random writes. WAL is both durable and performant.\n\nApplications beyond databases:\n- Kafka uses a commit log (similar concept)\n- Event Sourcing stores all changes as an ordered event log\n- Replication: WAL entries are streamed to replicas (PostgreSQL WAL replication)\n\nLSM-Tree (Cassandra, RocksDB): Writes go to memtable (in-memory) + WAL, then flushed to sorted SSTables on disk. Background compaction merges SSTables.",
              "tags": ["wal", "durability", "database-internals"],
              "difficulty": "advanced"
            }
          ]
        },
        {
          "id": "sd-caching",
          "title": "Caching Strategies & In-Memory Stores",
          "weight": 12,
          "cards": [
            {
              "id": "sd-c-001",
              "question": "What are the main caching strategies? When do you use each?",
              "answer": "1. Cache-Aside (Lazy Loading): App checks cache → on miss reads from DB → stores in cache. App manages cache. Resilient to cache failure. Risk: cold start / cache miss storm.\n\n2. Write-Through: App writes to cache AND DB simultaneously. Cache is always consistent. Higher write latency. Good when reads are frequent after writes.\n\n3. Write-Behind (Write-Back): App writes to cache; cache asynchronously writes to DB. Very fast writes. Risk: data loss if cache fails before flush.\n\n4. Read-Through: Cache sits in front of DB. On miss, cache loads from DB itself (transparent to app). Used by NHibernate, Spring Cache.\n\n5. Refresh-Ahead: Cache proactively refreshes hot entries before TTL expiry. Reduces miss storms. Requires predicting access patterns.",
              "tags": ["caching", "cache-aside", "write-through"],
              "difficulty": "intermediate"
            },
            {
              "id": "sd-c-002",
              "question": "What are Cache Eviction Policies? Explain LRU, LFU, and TTL.",
              "answer": "LRU (Least Recently Used): Remove the entry not accessed for the longest time. Good for recency-biased access. O(1) with HashMap + Doubly Linked List.\n\nLFU (Least Frequently Used): Remove the entry accessed least often. Good when frequency matters more than recency. Complex to implement. Handles workload shifts poorly.\n\nTTL (Time-To-Live): Entries expire after a fixed duration regardless of access. Simple, prevents stale data.\n\nOther: FIFO (rarely optimal), Random Replacement, MRU (certain streaming patterns).\n\nRedis defaults to LRU (configurable).\n\nBest practice: Combine TTL + LRU. TTL prevents stale data; LRU manages memory pressure.",
              "tags": ["lru", "lfu", "cache-eviction"],
              "difficulty": "intermediate"
            },
            {
              "id": "sd-c-003",
              "question": "What is a Cache Stampede (Thundering Herd) and how do you prevent it?",
              "answer": "Cache Stampede: When a popular cache entry expires, many concurrent requests simultaneously miss the cache, flood the database, and each independently recomputes the same data.\n\nPrevention strategies:\n1. Mutex/Lock: First request acquires a distributed lock, recomputes; others wait. Redis SET NX EX implements distributed mutex.\n2. Probabilistic Early Recomputation (XFetch): Before TTL expires, randomly recompute with increasing probability. Proactively refreshes hot entries.\n3. Background Refresh: Serve stale data immediately while a background thread refreshes asynchronously.\n4. Request Coalescing: Multiple requests for the same key coalesced into a single upstream request.\n5. Jitter on TTL: Add randomness to expiry times so batch entries don't expire simultaneously.",
              "tags": ["cache-stampede", "thundering-herd", "redis"],
              "difficulty": "advanced"
            },
            {
              "id": "sd-c-004",
              "question": "What is Redis and what are its key data structures?",
              "answer": "Redis: In-memory key-value store. Single-threaded for command processing. Persistence via RDB (snapshots) and AOF (append-only file). Used for caching, sessions, queues, leaderboards, pub/sub.\n\nKey data structures:\n- String: Simple values, counters. INCR for atomic counters.\n- List: Doubly linked list. LPUSH/RPUSH/LPOP. Use for queues and recent items.\n- Hash: Like a map. HSET/HGET. Use for object storage (user profiles).\n- Set: Unique unordered collection. SADD/SMEMBERS. Use for tags, unique visitors.\n- Sorted Set (ZSet): Elements with scores. ZADD/ZRANGE. O(log n) operations. Use for leaderboards, rate limiting, priority queues.\n- HyperLogLog: Approximate cardinality counting with O(1) memory. PFADD/PFCOUNT.\n- Streams: Append-only log with consumer groups. Like Kafka lite.",
              "tags": ["redis", "data-structures", "in-memory"],
              "difficulty": "intermediate"
            },
            {
              "id": "sd-c-005",
              "question": "What is a CDN (Content Delivery Network) and how does it work?",
              "answer": "CDN: A globally distributed network of edge servers that caches and serves content (images, CSS, JS, videos) close to users to reduce latency.\n\nHow it works: User requests asset → DNS resolves to nearest CDN PoP (Point of Presence) → Cache HIT: serve immediately → Cache MISS: fetch from origin, cache it, then serve.\n\nUse cases: Static assets, dynamic content acceleration, SSL termination at the edge, DDoS protection.\n\nCache Control: Origin sets Cache-Control headers (max-age, s-maxage). CDN respects these for TTL. Purge/invalidation clears stale content.\n\nExamples: Cloudflare, AWS CloudFront, Akamai, Fastly.\n\nDesign tip: For user-generated content (profile pics), upload to S3 → serve via CloudFront. S3 URL stays the same but content is edge-cached globally.",
              "tags": ["cdn", "edge-caching", "static-content"],
              "difficulty": "beginner"
            }
          ]
        },
        {
          "id": "sd-load-balancing",
          "title": "Load Balancing & Networking",
          "weight": 8,
          "cards": [
            {
              "id": "sd-lb-001",
              "question": "What is a Load Balancer and what algorithms does it use?",
              "answer": "Load Balancer: Distributes incoming traffic across multiple servers to maximize throughput, minimize latency, and avoid overloading any single server.\n\nAlgorithms:\n1. Round Robin: Requests distributed sequentially. Simple, ignores server capacity.\n2. Weighted Round Robin: Servers with higher capacity get more requests.\n3. Least Connections: Send to server with fewest active connections. Better for long-lived connections.\n4. Least Response Time: Send to server with lowest latency + fewest connections.\n5. IP Hash: Hash client IP to always route to same server (session persistence).\n6. Random: Works well at scale.\n\nLayer 4 (Transport): Works at TCP/UDP level. Faster. Examples: AWS NLB, HAProxy.\nLayer 7 (Application): Works at HTTP level. Routes based on URL/headers/cookies. SSL termination. Examples: AWS ALB, Nginx.",
              "tags": ["load-balancer", "round-robin", "algorithms"],
              "difficulty": "intermediate"
            },
            {
              "id": "sd-lb-002",
              "question": "What is a Reverse Proxy and how does it differ from a forward proxy?",
              "answer": "Forward Proxy: Sits in front of clients. Clients request via proxy which forwards to the internet. Use cases: anonymity, content filtering, bypass geo-restrictions. Clients know about the proxy.\n\nReverse Proxy: Sits in front of servers. Clients think they're talking to the server but proxy forwards to backend pool. Clients don't know about backend topology.\n\nBenefits of Reverse Proxy: Load balancing, SSL termination, caching, compression (gzip), security (hide backend IPs, WAF), request routing, rate limiting.\n\nCommon implementations: Nginx, HAProxy, AWS ALB/CLB, Cloudflare, Traefik.\n\nAPI Gateway vs Reverse Proxy: API Gateway is a reverse proxy with additional API management features (auth, rate limiting, request transformation, analytics).",
              "tags": ["reverse-proxy", "api-gateway", "nginx"],
              "difficulty": "intermediate"
            },
            {
              "id": "sd-lb-003",
              "question": "Explain DNS and how DNS Load Balancing works.",
              "answer": "DNS: Hierarchical distributed system that translates domain names to IP addresses.\n\nDNS Resolution flow: Browser cache → OS cache → Resolver (ISP) → Root nameserver → TLD nameserver → Authoritative nameserver → Returns IP.\n\nDNS Load Balancing: Return multiple A records for the same domain. Clients cycle through IPs (round-robin DNS). Simple global traffic distribution.\n\nLimitations: DNS TTL caching means changes take time to propagate. No health checking — DNS returns IPs even if servers are down.\n\nGeo-DNS / Latency-based routing: Return the IP of the server closest to the user (used by Route 53, Cloudflare).\n\nAnycast routing: Same IP announced from multiple data centers; BGP routing directs users to the nearest one. Used by CDNs and DNS providers.",
              "tags": ["dns", "geo-routing", "anycast"],
              "difficulty": "intermediate"
            }
          ]
        },
        {
          "id": "sd-messaging",
          "title": "Message Queues & Event Streaming",
          "weight": 12,
          "cards": [
            {
              "id": "sd-mq-001",
              "question": "When should you use a Message Queue vs a direct synchronous API call?",
              "answer": "Use a Message Queue when:\n- Decoupling: Producer should not depend on consumer availability (fire and forget)\n- Async processing: Tasks can be processed later (email sending, video transcoding, report generation)\n- Load buffering: Absorb traffic spikes; consumers process at their own pace\n- Reliability: Guarantee at-least-once delivery even if consumer crashes\n- Fan-out: One message should be consumed by multiple services\n\nUse synchronous API when:\n- Client needs an immediate response (payment confirmation)\n- Low latency is critical\n- Operation is simple and consumer is always available\n\nHybrid: Return 202 Accepted immediately, enqueue the job, poll or use webhooks for result. Used by AWS Lambda, payment processors.",
              "tags": ["message-queue", "async", "decoupling"],
              "difficulty": "beginner"
            },
            {
              "id": "sd-mq-002",
              "question": "What is Apache Kafka and how does it differ from traditional message queues (RabbitMQ, SQS)?",
              "answer": "Kafka: Distributed append-only commit log for high-throughput event streaming.\n\nKey concepts:\n- Topic: Named channel for messages. Divided into Partitions.\n- Partition: Ordered, immutable log. Messages assigned sequential offsets. Enables parallelism.\n- Producer: Writes messages. Can specify partition key for ordering.\n- Consumer Group: Partitions shared among consumers. Each partition consumed by exactly one consumer per group.\n- Retention: Messages retained for configured time regardless of consumption → enables replay.\n\nKafka vs Traditional MQ (RabbitMQ, SQS):\n- MQ deletes messages after consumption; Kafka retains them → event replay, multiple consumer groups\n- Kafka has much higher throughput (millions/sec)\n- RabbitMQ is simpler for task queues, complex routing, lower message volumes",
              "tags": ["kafka", "event-streaming", "topics-partitions"],
              "difficulty": "intermediate"
            },
            {
              "id": "sd-mq-003",
              "question": "What is the Saga Pattern and how does it handle distributed transactions?",
              "answer": "Saga Pattern: A sequence of local transactions where each step publishes an event to trigger the next. If a step fails, compensating transactions undo previous steps.\n\nTwo types:\n1. Choreography-based: Services listen for events and react. No central coordinator. Simple but hard to track overall state.\n2. Orchestration-based: A central Saga Orchestrator directs each step via commands. Easier to understand, but orchestrator is a SPOF.\n\nExample (Order Saga): Create Order → Reserve Inventory → Charge Payment → Ship Order.\nIf Payment fails → compensating: Release Inventory → Cancel Order.\n\nWhen to use: Replacing 2PC in microservices. Long-running business transactions spanning multiple services.\n\nTrade-off: Eventual consistency; compensating logic is complex.",
              "tags": ["saga", "distributed-transactions", "microservices"],
              "difficulty": "advanced"
            },
            {
              "id": "sd-mq-004",
              "question": "What is the difference between at-most-once, at-least-once, and exactly-once delivery?",
              "answer": "At-Most-Once: Message delivered zero or one time. No retries. May be lost. Fast and simple. Use for metrics, logs where losing a few events is acceptable.\n\nAt-Least-Once: Message delivered one or more times. Retried until acknowledged. No data loss but may get duplicates. Consumer must be idempotent. Most common pattern (Kafka default, SQS).\n\nExactly-Once: Message delivered exactly one time. Hard to achieve in distributed systems. Kafka achieves this with idempotent producers + transactional APIs within a single cluster.\n\nIdempotency key: Client sends a unique ID per request. Server stores processed IDs and ignores duplicates. This is how Stripe and payment APIs handle exactly-once semantics despite at-least-once transport.",
              "tags": ["delivery-semantics", "idempotency", "kafka"],
              "difficulty": "advanced"
            }
          ]
        },
        {
          "id": "sd-microservices",
          "title": "Microservices & Architecture Patterns",
          "weight": 12,
          "cards": [
            {
              "id": "sd-ms-001",
              "question": "What are Microservices? What are their pros and cons vs Monolith?",
              "answer": "Microservices: Architectural style where an application is composed of small, independently deployable services, each owning its data and communicating via APIs.\n\nMonolith pros: Simple to develop/debug initially, lower operational overhead, no network latency between components, ACID transactions across entire data.\nMonolith cons: Scaling entire app to scale one feature, long build/deploy cycles, tight coupling.\n\nMicroservices pros: Independent scaling, independent deployment, fault isolation, team autonomy.\nMicroservices cons: Operational complexity (N services), distributed tracing difficulty, network latency and failures, eventual consistency, data duplication.\n\nMigration tip: Start as a Monolith → extract services as you identify scaling or team boundaries (Strangler Fig pattern). Don't start with microservices from day 1.",
              "tags": ["microservices", "monolith", "architecture"],
              "difficulty": "beginner"
            },
            {
              "id": "sd-ms-002",
              "question": "What is an API Gateway and what features does it provide?",
              "answer": "API Gateway: A single entry point for all clients. Sits in front of microservices and handles cross-cutting concerns.\n\nFeatures: Routing, Authentication & Authorization (validate JWT/OAuth tokens once), Rate Limiting, SSL Termination, Request/Response transformation, Caching, Load balancing, Service discovery integration, Analytics & Logging, Circuit breaking.\n\nBenefits: Simplifies clients (one URL instead of N service URLs), reduces coupling between clients and services, enables backend evolution without client changes.\n\nExamples: AWS API Gateway, Kong, Apigee, Nginx, Traefik, Netflix Zuul.\n\nBFF (Backend For Frontend) Pattern: Create a specialized API Gateway per client type (mobile BFF, web BFF) that aggregates and transforms data optimally for each client.",
              "tags": ["api-gateway", "bff", "microservices"],
              "difficulty": "intermediate"
            },
            {
              "id": "sd-ms-003",
              "question": "What is a Circuit Breaker pattern and why is it needed?",
              "answer": "Circuit Breaker: Prevents a failing service from causing a cascade failure across the system.\n\nStates:\n- Closed (normal): Requests pass through. Failure count tracked.\n- Open (tripped): After failure threshold exceeded, all requests fail fast without calling the service. After timeout, moves to Half-Open.\n- Half-Open: A few test requests allowed. If successful, circuit closes; if failing, reopens.\n\nWhy needed: If Service A calls Service B which is slow/down, Service A threads wait and accumulate. Soon Service A exhausts its thread pool. This cascades upstream. Circuit Breaker fails fast and returns a fallback.\n\nImplementations: Netflix Hystrix (deprecated), Resilience4j (Java), Polly (.NET), AWS SDK built-in retries.\n\nCombine with: Exponential backoff and jitter for retries.",
              "tags": ["circuit-breaker", "resilience", "cascade-failure"],
              "difficulty": "intermediate"
            },
            {
              "id": "sd-ms-004",
              "question": "What is CQRS (Command Query Responsibility Segregation) and Event Sourcing?",
              "answer": "CQRS: Separate the model for reading (Query) from the model for writing (Command). Different data models, possibly different databases, optimized for their operations.\n\nBenefits: Read model can be denormalized and highly optimized. Write model can enforce business rules. Scale reads and writes independently.\n\nEvent Sourcing: Instead of storing current state, store a sequence of events that led to the state. Current state derived by replaying events. Examples: banking (store transactions, balance = sum), version control (Git stores diffs).\n\nBenefits of Event Sourcing: Full audit trail, temporal queries (state at time T?), event replay, natural integration with event-driven architectures.\n\nDownsides: Queries require event replay (mitigated by snapshots). Schema evolution of events is complex. Eventual consistency. Not suitable for all domains.",
              "tags": ["cqrs", "event-sourcing", "architecture-patterns"],
              "difficulty": "advanced"
            },
            {
              "id": "sd-ms-005",
              "question": "How does Service Discovery work in microservices?",
              "answer": "Service Discovery: How services find the network location (IP:port) of other services without hardcoding addresses.\n\nClient-Side Discovery: Client queries a Service Registry, gets available instances, picks one (with client-side load balancing). Example: Netflix Eureka + Ribbon.\n\nServer-Side Discovery: Client sends request to a Load Balancer which queries the Service Registry and forwards. Simpler client logic. Example: AWS ALB + ECS, Kubernetes Services.\n\nService Registries: Consul, Etcd, ZooKeeper, Netflix Eureka. Instances register on startup, deregister on shutdown, send heartbeats.\n\nKubernetes approach: Services (ClusterIP, NodePort, LoadBalancer) provide stable DNS names. kube-proxy handles routing. CoreDNS provides service DNS resolution. No separate service registry needed.",
              "tags": ["service-discovery", "consul", "kubernetes"],
              "difficulty": "intermediate"
            }
          ]
        },
        {
          "id": "sd-distributed-systems",
          "title": "Distributed Systems Concepts",
          "weight": 10,
          "cards": [
            {
              "id": "sd-ds-001",
              "question": "What is Consistent Hashing and why is it used?",
              "answer": "Traditional hashing (key % N): Adding/removing one server reshuffles almost all keys → massive cache invalidation or data migration.\n\nConsistent Hashing: Map both servers and keys to points on a circular ring (0 to 2^32). Each key assigned to the next server clockwise. Adding a server: only keys between new server and predecessor are remapped. Removing: only that server's keys shift to the next server.\n\nVirtual Nodes: Each physical server gets V virtual nodes on the ring (V=100-200). Ensures more uniform distribution. When a server is added, it evenly steals keys from all other servers.\n\nUsed by: Amazon DynamoDB, Apache Cassandra, Redis Cluster, Memcached (ketama hashing), CDNs (Akamai).",
              "tags": ["consistent-hashing", "distributed-systems", "partitioning"],
              "difficulty": "intermediate"
            },
            {
              "id": "sd-ds-002",
              "question": "What is the Raft Consensus Algorithm and how does it work?",
              "answer": "Raft: A consensus algorithm ensuring a cluster of nodes agrees on a sequence of values (replicated log) even with node failures.\n\nConcepts:\n- Leader Election: One node elected leader at a time. Nodes start as Followers. If no heartbeat from leader, Follower becomes Candidate and requests votes. First to get majority votes becomes Leader for a Term.\n- Log Replication: Leader receives client requests, appends to its log, replicates to Followers via AppendEntries. Once majority acknowledges, leader commits and responds to client.\n- Safety: Committed entries are never lost. New leader must have all committed entries.\n\nTerm: Monotonically increasing logical clock. Helps detect stale leaders.\n\nUsed by: etcd (Kubernetes), CockroachDB, Consul, TiKV.\n\nVs Paxos: Raft is functionally equivalent but designed for easier understanding and implementation.",
              "tags": ["raft", "consensus", "leader-election"],
              "difficulty": "advanced"
            },
            {
              "id": "sd-ds-003",
              "question": "What is a Bloom Filter and when would you use it?",
              "answer": "Bloom Filter: A space-efficient probabilistic data structure that tests whether an element is in a set. Can have false positives, never false negatives.\n\nHow it works: Use K hash functions to map an element to K bit positions in a bit array. To add: set K bits to 1. To check: if all K bits are 1 → probably in set. If any bit is 0 → definitely not in set.\n\nProperties: ~10 bits per element for 1% false positive rate. O(K) per operation. ~10x smaller than a hash set.\n\nUse cases:\n- Database: Check if key exists before a disk read (Cassandra uses Bloom filters per SSTable)\n- URL shortener: Check if short code is already used\n- CDN: Is this URL cached at this edge server?\n- Spam detection: Is this email address a known spammer?\n\nVariants: Counting Bloom Filter (supports deletions), Cuckoo Filter (better performance, supports deletions).",
              "tags": ["bloom-filter", "probabilistic", "space-efficient"],
              "difficulty": "intermediate"
            },
            {
              "id": "sd-ds-004",
              "question": "What is Change Data Capture (CDC) and how is it used?",
              "answer": "CDC: Tracking and capturing changes (inserts, updates, deletes) in a database in real-time, so they can be streamed to other systems.\n\nHow it works: CDC tools read the database's WAL/binlog (MySQL), which contains all changes. These are published to Kafka topics.\n\nTools: Debezium (connects DB binlog → Kafka), AWS DMS, Confluent Platform.\n\nUse cases:\n1. Event-driven microservices: Order placed in DB → CDC publishes event → inventory service updates stock\n2. Real-time analytics: Changes streamed to data warehouse (BigQuery, Snowflake)\n3. Cache invalidation: When DB changes, CDC event triggers cache key deletion\n4. Search index sync: Product DB changes → Elasticsearch index updated in real-time\n5. Outbox Pattern implementation: CDC reads from Outbox table and publishes reliably\n\nKey advantage: Works without modifying application code. DB is the source of truth.",
              "tags": ["cdc", "debezium", "event-driven"],
              "difficulty": "advanced"
            }
          ],
          "id": "sd-distributed-systems"
        },
        {
          "id": "sd-api-design",
          "title": "API Design: REST, gRPC & GraphQL",
          "weight": 8,
          "cards": [
            {
              "id": "sd-api-001",
              "question": "Compare REST, gRPC, and GraphQL. When do you use each?",
              "answer": "REST: Stateless, resource-based (URL = resource). Uses HTTP methods (GET, POST, PUT, DELETE). JSON payloads. Easy to use, widely understood, great for public APIs and browser clients.\n\ngRPC: Google's RPC framework. Uses Protocol Buffers (binary, 3-10x smaller than JSON). HTTP/2 (multiplexing, server push, streaming). Strongly typed via .proto files. Excellent for internal microservice-to-microservice communication. Not browser-friendly natively.\n\nGraphQL: Client specifies exactly what data it needs in a query. Single endpoint. Solves over-fetching and under-fetching. Great for complex, nested data (social networks, e-commerce). Introspection for documentation. Complexity: N+1 problem, caching is harder.\n\nChoose: REST for public APIs; gRPC for internal high-performance microservices; GraphQL for complex client-specific data requirements (mobile apps, SPAs).",
              "tags": ["rest", "grpc", "graphql", "api-design"],
              "difficulty": "intermediate"
            },
            {
              "id": "sd-api-002",
              "question": "What are REST API best practices for versioning and status codes?",
              "answer": "Versioning strategies:\n1. URI versioning: /api/v1/users (most common, cache-friendly)\n2. Header versioning: Accept: application/vnd.myapp.v1+json\n3. Query param: /api/users?version=1\n\nHTTP Status Codes:\n2xx: 200 OK, 201 Created (POST), 204 No Content (DELETE)\n3xx: 301 Moved Permanently, 304 Not Modified (caching)\n4xx: 400 Bad Request, 401 Unauthorized (not logged in), 403 Forbidden (logged in, no permission), 404 Not Found, 409 Conflict, 422 Unprocessable Entity (validation), 429 Too Many Requests\n5xx: 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable, 504 Gateway Timeout\n\nBest practices: Use nouns not verbs in URLs (/users not /getUsers). HATEOAS for discoverability. Pagination with cursor or offset. Consistent error response schema.",
              "tags": ["rest", "versioning", "http-status-codes"],
              "difficulty": "intermediate"
            },
            {
              "id": "sd-api-003",
              "question": "What is WebSocket vs Server-Sent Events (SSE) vs Long Polling? When do you use each?",
              "answer": "Long Polling: Client sends request → server holds it open until data available → responds → client immediately sends another request. Simple, works everywhere. Inefficient (repeated connections, headers).\n\nSSE (Server-Sent Events): Server pushes updates over a single HTTP connection. One-directional (server → client only). Auto-reconnect built in. Simple API (EventSource). Good for: stock tickers, notifications, live dashboards.\n\nWebSocket: Full-duplex bidirectional connection. After HTTP upgrade handshake, a persistent TCP connection is maintained. Both client and server can send messages at any time. Good for: chat, collaborative editing, online gaming, real-time collaboration.\n\nChoose: SSE for server-to-client push (simpler, HTTP-compatible, passes through proxies); WebSocket for bidirectional real-time (chat, multiplayer).",
              "tags": ["websocket", "sse", "long-polling", "real-time"],
              "difficulty": "intermediate"
            },
            {
              "id": "sd-api-004",
              "question": "What is Idempotency in APIs and why is it important?",
              "answer": "An operation is idempotent if making the same request multiple times has the same effect as making it once.\n\nHTTP methods by idempotency:\n- GET, HEAD, OPTIONS, DELETE: Idempotent (safe to retry)\n- PUT: Idempotent (full replace — same result every time)\n- PATCH: NOT necessarily idempotent (increment by 1 is not idempotent)\n- POST: NOT idempotent (creates a new resource each time)\n\nIdempotency key: For non-idempotent operations like payments, client sends a unique Idempotency-Key header. Server stores the key + response. On duplicate request, return the stored response without re-processing.\n\nCritical for: Payment APIs (prevent double charges), order placement, email sends. Stripe, Razorpay, and most payment APIs implement this pattern.",
              "tags": ["idempotency", "rest", "api-design"],
              "difficulty": "intermediate"
            }
          ]
        },
        {
          "id": "sd-observability",
          "title": "Observability, Monitoring & Reliability",
          "weight": 5,
          "cards": [
            {
              "id": "sd-obs-001",
              "question": "What are the three pillars of Observability? What tools implement each?",
              "answer": "1. Metrics: Numerical measurements aggregated over time (CPU, request rate, error rate, latency). Best for alerting and dashboards. Tools: Prometheus (collection), Grafana (visualization), Datadog, CloudWatch. Use RED method: Rate, Errors, Duration per service.\n\n2. Logs: Timestamped records of discrete events. Best for debugging specific requests. Tools: ELK Stack (Elasticsearch + Logstash + Kibana), Loki + Grafana, CloudWatch Logs, Splunk. Use structured logging (JSON).\n\n3. Traces (Distributed Tracing): Track a single request across multiple services. Each operation = a 'span'. Spans form a trace. Essential for diagnosing latency in microservices. Tools: Jaeger, Zipkin, AWS X-Ray, Datadog APM. Standard: OpenTelemetry.\n\nWhy all three: Metrics = WHAT is wrong (high latency), Traces = WHERE (which service), Logs = WHY (specific error).",
              "tags": ["observability", "metrics", "tracing", "logging"],
              "difficulty": "intermediate"
            },
            {
              "id": "sd-obs-002",
              "question": "What is the Outbox Pattern and how does it guarantee exactly-once event publishing?",
              "answer": "Problem: Writing to DB and publishing to Kafka in the same operation requires a distributed transaction. If the app crashes after DB write but before Kafka publish, the event is lost.\n\nOutbox Pattern: Within a single DB transaction, write the event to an 'Outbox' table alongside the main data change. A separate process (CDC via Debezium, or a polling publisher) reads unprocessed Outbox rows and publishes them to Kafka, then marks them as processed.\n\nGuarantees: At-least-once delivery (Kafka consumer must be idempotent). The DB transaction is atomic — both the business data and the Outbox event are committed together or not at all.\n\nUsed by: Transactional outbox is the standard pattern for reliable event-driven microservices. Alternatives: Transactional messaging with Spring + JMS/Kafka transactions.",
              "tags": ["outbox-pattern", "exactly-once", "event-driven"],
              "difficulty": "advanced"
            },
            {
              "id": "sd-obs-003",
              "question": "What is a Health Check and how do Readiness vs Liveness probes differ in Kubernetes?",
              "answer": "Liveness Probe: Checks if the container is alive (running, not deadlocked). If it fails → Kubernetes kills and restarts the container. Example: check if the app responds to /health/liveness.\n\nReadiness Probe: Checks if the container is ready to serve traffic. If it fails → Kubernetes removes the pod from the load balancer (no traffic sent) but does NOT restart it. Use for: DB connection not yet available, warming up cache, dependencies not ready. Example: /health/readiness.\n\nStartup Probe: Gives slow-starting apps extra time before liveness/readiness probes begin.\n\nSpring Boot Actuator: /actuator/health/liveness and /actuator/health/readiness endpoints are automatically configured when deployed in Kubernetes. Set: management.health.liveness-state.enabled=true and management.health.readiness-state.enabled=true.",
              "tags": ["health-check", "kubernetes", "liveness", "readiness"],
              "difficulty": "intermediate"
            }
          ]
        },
        {
          "id": "sd-classic-problems",
          "title": "Classic System Design Problems",
          "weight": 18,
          "cards": [
            {
              "id": "sd-cp-001",
              "question": "Design a URL Shortener (like bit.ly). Walk through the key components.",
              "answer": "Requirements: Shorten long URLs, redirect short URLs. ~100M URLs/day, 10:1 read:write ratio.\n\nEstimation: 100M URLs/day = 1,160 writes/sec; Reads = 11,600/sec. 5-year storage: ~90TB.\n\nShort URL generation (7-char base62 = 62^7 = 3.5 trillion combos):\n1. Hash long URL (MD5/SHA256, take first 7 chars) — risk of collisions\n2. Auto-increment counter → encode to base62 — no collision\n3. Pre-generate random keys (KGS — Key Generation Service)\n\nComponents: API servers, DB (MySQL for URL mappings), Redis cache (hot URLs), KGS pre-generates keys.\n\nRedirect: 301 (Permanent — browser caches, reduces server load) vs 302 (Temporary — every redirect hits server, better for analytics). For analytics use 302.\n\nDB schema: shortCode (PK), longUrl, userId, createdAt, expiresAt.",
              "tags": ["url-shortener", "system-design-problem", "hashing"],
              "difficulty": "intermediate"
            },
            {
              "id": "sd-cp-002",
              "question": "Design Twitter's News Feed / Timeline. How do you handle fan-out?",
              "answer": "Fan-out on Write (Push): When user A tweets, immediately push tweet ID to all followers' timeline caches. Timeline reads are fast. Problem: Celebrities with 10M followers require 10M cache writes per tweet (huge write amplification).\n\nFan-out on Read (Pull): When user requests timeline, fetch tweets from all followed accounts, merge and sort. No write amplification. Problem: Expensive reads, especially for users following many people.\n\nHybrid approach (Twitter's actual solution): Fan-out on Write for normal users. For celebrities (>threshold followers), Fan-out on Read. When requesting timeline: read pre-built cache + fetch recent tweets from any celebrities they follow → merge.\n\nStorage: Tweet content in MySQL/distributed store. Timeline cache in Redis (sorted set by timestamp). Cassandra for long-term tweet storage. Elasticsearch for tweet search.",
              "tags": ["twitter", "news-feed", "fan-out"],
              "difficulty": "advanced"
            },
            {
              "id": "sd-cp-003",
              "question": "Design a Chat Messaging System (like WhatsApp).",
              "answer": "Requirements: 1-on-1 messaging, group messaging, message status (sent/delivered/read), online presence.\n\nMessage delivery: WebSocket for persistent bidirectional connection. Message flow: Sender → Chat Server → DB (persist) → push to recipient's Chat Server (via Kafka if different server) → recipient's device.\n\nMessage ordering: Each conversation has a monotonic sequence number.\n\nPersistence: Cassandra for messages (partition by conversation_id, sort by timestamp). MySQL for metadata (users, conversations).\n\nOffline delivery: Messages stored in DB. When user comes online, sync from last-seen sequence number.\n\nPresence: Online status in Redis with TTL. Heartbeat every 30 seconds updates TTL. If TTL expires, user is offline.\n\nEnd-to-end encryption: Signal Protocol. Keys exchanged between clients. Server only sees encrypted ciphertext.\n\nGroup messages: Fan-out to all group members. Large groups use push notifications for inactive members.",
              "tags": ["whatsapp", "chat", "websockets"],
              "difficulty": "advanced"
            },
            {
              "id": "sd-cp-004",
              "question": "Design a Ride-Sharing System (like Uber/Ola). Focus on driver matching.",
              "answer": "Location updates: Drivers send GPS location every 4-5 seconds. Store in Redis Geo (geospatial sorted set). Redis GEOSEARCH finds drivers within radius.\n\nMatching service: When rider requests: (1) Query Redis for drivers within radius, (2) Filter by availability, (3) Rank by ETA, (4) Send push notification to top N drivers, (5) First driver to accept gets the ride.\n\nRide tracking: Both rider and driver connected via WebSocket. Driver sends location updates → published to rider's WebSocket.\n\nData persistence: Cassandra for location history (time-series). PostgreSQL for ride metadata (fare, status, route).\n\nSurge pricing: Compute ratio of supply (available drivers) to demand (ride requests) in each geohash cell. Apply multiplier dynamically.\n\nGeoHashing: Encode lat/long into alphanumeric string. Nearby locations share common prefix. Useful for partitioning geospatial data.",
              "tags": ["uber", "geospatial", "matching"],
              "difficulty": "advanced"
            },
            {
              "id": "sd-cp-005",
              "question": "Design a Video Streaming Platform (like YouTube / Netflix).",
              "answer": "Video upload pipeline: Client uploads raw video to S3 (multipart upload) → triggers transcoding job via Kafka → transcoding workers convert to multiple resolutions (240p, 480p, 720p, 1080p, 4K) and formats (HLS/MPEG-DASH) → output stored in S3.\n\nAdaptive Bitrate Streaming (ABR): Video split into 2-10 second chunks. Client downloads manifest file (M3U8 for HLS). Based on network speed, client requests appropriate quality chunks.\n\nContent delivery: S3 → CloudFront CDN → Edge servers worldwide. Users stream from nearest edge PoP.\n\nMetadata DB: MySQL for video metadata (title, description, view count). Elasticsearch for search. Redis for trending/view counters.\n\nView count: Use Redis INCR for fast increments. Batch-flush to DB every N seconds to avoid DB overload.\n\nRecommendation: Collaborative filtering on watch history. Processed in offline batch jobs (Spark). Results precomputed and stored in DynamoDB per user.",
              "tags": ["youtube", "video-streaming", "cdn"],
              "difficulty": "advanced"
            },
            {
              "id": "sd-cp-006",
              "question": "Design a Google Drive / Dropbox (File Storage System).",
              "answer": "File chunking: Split large files into chunks (e.g., 4MB). Upload only changed chunks (delta sync). Store hash of each chunk. If hash unchanged, skip upload. This is how Dropbox minimizes bandwidth.\n\nStorage: Chunks stored in S3 with content-addressable naming (hash of content = filename). Deduplication: same chunk content across users stored once.\n\nMetadata DB: Track files, folders, user_id, chunk_list (ordered array of chunk hashes), version_id. PostgreSQL.\n\nSync mechanism: Long Poll → when device saves a file, notify other devices → devices fetch changed metadata → download changed chunks.\n\nConflict resolution: Last Write Wins with conflict copy created. Both versions stored.\n\nSharing: Access control lists (ACL) per file/folder. Token-based sharing links.\n\nVersion history: Keep N previous versions. Store each version as a separate metadata record. Old chunks garbage collected after all references are removed.",
              "tags": ["google-drive", "file-storage", "sync"],
              "difficulty": "advanced"
            },
            {
              "id": "sd-cp-007",
              "question": "Design a Search Autocomplete / Typeahead System.",
              "answer": "Requirements: Return top 5 suggestions for a partial query prefix in < 100ms.\n\nData collection: Log all search queries with frequency. Offline batch job (Hadoop/Spark) aggregates weekly. Top N queries per prefix stored.\n\nTrie (Prefix Tree): Each node represents a character. Each node stores top-K suggestions for that prefix. Serialize Trie to disk, cache in memory per server.\n\nScaling: Partition Trie by prefix range (A-F, G-N, O-Z) across multiple servers. Use consistent hashing to route each prefix to the same server.\n\nUpdate mechanism: Don't update Trie in real-time. Weekly batch rebuild. For trending queries, blend recent query cache with historical Trie (dual-layer).\n\nResponse time: Top-level prefixes (1-2 chars) served from CDN. Deeper prefixes served from regional Trie servers. Target: < 100ms at p99.",
              "tags": ["autocomplete", "trie", "search"],
              "difficulty": "advanced"
            },
            {
              "id": "sd-cp-008",
              "question": "Design a Payment Gateway / UPI Transaction System (critical for Indian interviews).",
              "answer": "Core Flow: User initiates payment → API Gateway validates auth → Payment Service (validates request, generates transaction ID) → checks idempotency key (Redis SET NX) → Fraud Service (ML model, rule engine) → Bank/UPI Integration (NPCI for UPI) → Update ledger → Notify user.\n\nIdempotency: Every request includes client-generated idempotency key. Server stores key → response mapping in Redis with TTL. Duplicate request returns same response without re-processing. Critical for payment safety.\n\nDual-write Ledger: Credit sender AND debit receiver in a single ACID transaction.\n\nUPI specifics: VPA (Virtual Payment Address) maps to account. NPCI acts as central switch. Bank adapters handle each bank's API.\n\nFraud detection: Real-time rule engine + ML model (XGBoost). Check velocity (too many transactions in short time), location anomalies, device fingerprint. Async — don't block the payment path for low-risk transactions.\n\nReconciliation: Batch job daily compares internal ledger with bank statements. Flags discrepancies for manual review.",
              "tags": ["payment-gateway", "upi", "fintech", "india"],
              "difficulty": "advanced"
            }
          ]
        },
        {
          "id": "sd-interview-approach",
          "title": "Interview Strategy & Numbers to Know",
          "weight": 5,
          "cards": [
            {
              "id": "sd-ia-001",
              "question": "What is the RESHADED framework for answering system design interviews?",
              "answer": "R — Requirements: Clarify functional (what does the system do?) and non-functional (scale, latency, availability, consistency) requirements. Agree on scope. Ask about MAU/DAU, read/write ratio, SLAs.\n\nE — Estimation: Back-of-envelope calculation. Storage, bandwidth, QPS.\n\nS — Service Interface: Define API endpoints (REST or gRPC). Method signatures, request/response schemas.\n\nH — High-Level Design: Draw overall architecture. Key components: clients, load balancers, app servers, databases, caches, message queues.\n\nA — Algorithm / Core Logic: Deep dive into the most interesting part. Data structures, sharding strategy, consistency model.\n\nD — Database Design: Schema, indexes, data model. SQL vs NoSQL choice with reasoning.\n\nE — Evaluate & Evolve: Address bottlenecks. How does each component scale? What are failure modes? Tradeoffs made.\n\nD — Deployment: How would you deploy and monitor this? CI/CD, rollout strategy.",
              "tags": ["interview-framework", "system-design-approach", "reshaded"],
              "difficulty": "beginner"
            },
            {
              "id": "sd-ia-002",
              "question": "What numbers should you memorize for system design capacity estimation?",
              "answer": "Storage Units: 1KB=10^3B, 1MB=10^6B, 1GB=10^9B, 1TB=10^12B, 1PB=10^15B.\n\nTime: 1 day = 86,400 sec ≈ 10^5 sec. 1 month ≈ 2.5M sec. 1 year ≈ 31M sec.\n\nLatency numbers (approximate): L1 cache = 1ns, L2 cache = 10ns, RAM = 100ns, SSD read = 100μs, Network within DC = 500μs, HDD seek = 10ms, Network cross-continent = 150ms.\n\nCommon sizes: Char = 1B, Integer = 4B, Long = 8B, UUID = 16B, Tweet = 280B, Photo = 200KB, Video (1 min HD) = 50MB.\n\nScale thumb rules: 1 server handles ~10K concurrent connections; Redis = ~100K ops/sec; MySQL = ~50K queries/sec; Kafka = ~1M messages/sec per broker.\n\nActive users: Twitter DAU = 200M, WhatsApp = 2B, YouTube = 2B monthly, Instagram = 500M DAU.",
              "tags": ["estimation", "numbers", "capacity-planning"],
              "difficulty": "beginner"
            },
            {
              "id": "sd-ia-003",
              "question": "What are the most common interview questions at FAANG and top Indian tech companies?",
              "answer": "FAANG / Top Global Companies:\n- Design YouTube / Netflix\n- Design Twitter Feed / Instagram\n- Design WhatsApp / Messenger\n- Design Google Docs (collaborative editing — OT/CRDTs)\n- Design a Distributed Cache / Key-Value Store\n- Design URL Shortener\n- Design Search Autocomplete\n- Design Uber / Ola\n- Design Rate Limiter / API Gateway\n- Design a Notification System\n\nTop Indian Tech Companies (Flipkart, Swiggy, Zomato, Paytm, PhonePe, CRED, Razorpay, Meesho):\n- Design Payment Gateway / UPI Transaction System\n- Design Food Delivery System\n- Design Flash Sale / High-Traffic Event System\n- Design OTP / Authentication Service\n- Design Wallet / Ledger System\n- Design Real-time Inventory System\n- Design Fraud Detection System\n- Design Notification System (push, email, SMS at scale)\n\nFocus areas for India: Payments, UPI, low-latency at scale, cost-efficient cloud architecture.",
              "tags": ["interview-questions", "faang", "india-interviews"],
              "difficulty": "beginner"
            },
            {
              "id": "sd-ia-004",
              "question": "What are SLI, SLO, SLA and how do Error Budgets work?",
              "answer": "SLI (Service Level Indicator): A specific measured metric reflecting service health. Examples: request success rate, p99 latency < 200ms, availability percentage.\n\nSLO (Service Level Objective): An internal target for an SLI. Example: 99.9% of requests succeed, p99 latency < 200ms, measured over 30 days. Aspirational but not contractual.\n\nSLA (Service Level Agreement): A contractual commitment to customers. Usually looser than SLO (e.g., 99.5% availability). Breach means financial penalties.\n\nError Budget: The acceptable amount of downtime/errors per period. SLO of 99.9% over 30 days = 0.1% error budget = ~43 minutes of downtime allowed.\n\nIf budget is exhausted: Engineering team must focus on reliability, no new features.\nIf budget is healthy: Teams can move fast and take risks.\n\nBurn rate: How fast you're consuming your error budget. Burn rate > 1 means you'll exhaust budget before period ends.",
              "tags": ["sli", "slo", "sla", "error-budget"],
              "difficulty": "intermediate"
            }
          ]
        }
      ]
    }
  ]
};

