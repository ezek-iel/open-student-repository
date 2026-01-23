PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_resource` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`link` text NOT NULL,
	`details` text NOT NULL,
	`category` text NOT NULL,
	`price` integer NOT NULL,
	`level` text NOT NULL,
	`type` text NOT NULL,
	`source` text NOT NULL,
	`date` text NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_resource`("id", "name", "link", "details", "category", "price", "level", "type", "source", "date") SELECT "id", "name", "link", "details", "category", "price", "level", "type", "source", "date" FROM `resource`;--> statement-breakpoint
DROP TABLE `resource`;--> statement-breakpoint
ALTER TABLE `__new_resource` RENAME TO `resource`;--> statement-breakpoint
PRAGMA foreign_keys=ON;