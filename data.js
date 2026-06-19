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
    }
  ]
};

