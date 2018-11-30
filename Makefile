IMAGE     := nyttop

install:
	@yarn install

start:
	@yarn start

test:
	@yarn test

.started:
	@docker-compose build
	@docker-compose up -d
	@touch .started
	@echo "Docker containers are now running."

start-docker-image: .started

serve: watch

watch: .started
	@docker-compose exec $(IMAGE) make install
	@docker-compose exec $(IMAGE) make start

stop:
	@docker-compose kill
	@docker-compose stop
	@docker-compose down --rmi local
	@docker-compose rm -f
	-@rm .started