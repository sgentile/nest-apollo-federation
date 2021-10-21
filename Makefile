####################################################################################
# This makefile is intended to run on the Mile Two network (your PC)
####################################################################################
define help_instructions
	@echo "Misc tags:"
	@echo "  help       Display this help text"
	@echo ""	
	@echo "Dev tags:"
	@echo "  clear-system       	Prune docker containers, images, and volumes"
	@echo "  clear-volumes      	Prune docker volumes"
	@echo "  build      			Build the dev containers"
	@echo "  down       			Compose down the dev sandbox"
	@echo "  up         			Compose up a development sandbox.  You must run docker login first."
	@echo "  migration-run   		Runs the migrations for Oracle. Docker stack must be running"
	@echo "  migration-generate 	Generates a migration file. Accepts arg name where name will be the filename."
	@echo "	 						Syntax is make name=FileName generateMigration. Docker stack must be running"
	@echo "  migration-create  		Creates an empty migration"
	@echo "  migration-revert  		Rolls back one migration"
	@echo "  database-seed  		Add random data to models"
	@echo "  database-drop  		Drops all database tables"
	@echo "  database-init  		Drops all tables, runs migrations, then seeds data"
	@echo "********" 	
endef

help:
	$(call help_instructions)

prune:
	docker system prune

clean:
	docker volume rm $(docker volume ls -qf dangling=true)
	docker rmi $(docker images | grep '^<none>' | awk '{print $3}')

reset:
	docker-compose down	
	docker container prune -f
	docker images | grep "api_db" | awk '{print $3}' | xargs docker rmi -f

clear-system:
	docker container prune --force
	docker system prune -a -f

clear-volumes:
	docker volume prune -f

build: 
	docker-compose build

down:
	docker-compose down

up:
	docker-compose up

up-d:
	docker-compose up -d

restart:
	docker-compose down
	docker-compose up -d

redis:
	docker-compose up redis -d