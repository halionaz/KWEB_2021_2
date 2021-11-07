-- 1
SELECT id, c3, c5 FROM crud WHERE c1 = 11 AND c2 = 2;

-- 2
SELECT * FROM crud WHERE c1 > 18 OR c2 < 2;

-- 3
INSERT INTO crud (c1, c2, c3, c5) VALUE (7, 4, 'col101', 0);

-- 4
INSERT INTO crud (id, c1, c2, c3, c5) VALUE (103, 3, 3, 'col103', 1);

-- 5
SELECT * FROM crud WHERE id > 100;

-- 6
UPDATE crud SET c3 = 'col0', c5 = 0 WHERE c1 > 4 AND c1 < 9 and c2 = 1;

-- 7
SELECT * FROM crud WHERE c1 > 4 AND c1 < 9 and c2 = 1;

-- 8
DELETE FROM crud WHERE c5 = 0;

-- 9
SELECT * FROM crud WHERE c5 = 0;